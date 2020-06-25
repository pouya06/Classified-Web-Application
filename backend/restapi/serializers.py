from rest_framework import serializers
from .models import Post


class Serializers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'description', 'zipcode')
