from rest_framework.routers import DefaultRouter
from .views import RecordsOperationsViewset, MediateOperationsViewset

router = DefaultRouter()

router.register(r'Record', RecordsOperationsViewset)
router.register(r'Mediation', MediateOperationsViewset, basename='user1')
urlpatterns = router.urls
