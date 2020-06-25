from django.contrib import admin
from .models import Post


@admin.register(Post)
class RestAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'zipcode', 'sex', 'register_date']
