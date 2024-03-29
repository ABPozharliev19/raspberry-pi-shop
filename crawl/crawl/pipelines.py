from typing import TypedDict
from asgiref.sync import sync_to_async

from .services import ImageService
from .items import ComponentItem

from components.models import Categories, Components
from stores.models import Stores

ComponentType = TypedDict('ComponentType', {
    "name": str,
    "description": str,
    "price": float,
    "category": str,
    "image": str,
    "url": str
})


class CrawlPipeline:
    @sync_to_async
    def _get_category(self, category: Categories) -> Categories:
        return Categories.objects.get(name=category)

    @sync_to_async
    def _get_store(self, store: Stores) -> Stores:
        return Stores.objects.get(store_name=store)

    @sync_to_async
    def _item_exists(self, name: str, store: Stores) -> bool:
        return Components.objects \
               .filter(name=name) \
               .filter(store=store) \
               .exists()

    @sync_to_async
    def _update_item(self, item: ComponentType, store: Stores, category: Categories) -> Components:
        component_id = Components.objects \
                       .filter(name=item['name'])\
                       .update(
                            name=item['name'],
                            description=item['description'],
                            price=0 if not item['price'] else float(item['price']),
                            category=category,
                            image=item['image'],
                            url=item['url'],
                            store=store
                       )
        return Components.objects.get(name=item['name'])

    async def process_item(self, item: ComponentType, spider):
        store = await self._get_store(spider.name)
        category = await self._get_category(item['category'])

        item_is_new = False

        if await self._item_exists(item['name'], store):
            component = await self._update_item(item, store, category)
        else:
            component = ComponentItem(
                name=item['name'],
                description=item['description'],
                price=0 if not item['price'] else float(item['price']),
                category=category,
                image=item['image'],
                url=item['url'],
                store=store
            )
            item_is_new = True

        component = await sync_to_async(component.save)()

        if item_is_new:
            ImageService.save_image(item['image'], component.id)

        return component

