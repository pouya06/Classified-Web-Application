from django.urls import path

from . import views
app_name = 'restapi'
urlpatterns = [
    path('posts/', views.post_list, name="post_all"),
    path('posts/<int:post_id>/', views.post_detail, name="post_details"),
]
