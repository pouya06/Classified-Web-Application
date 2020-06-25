import datetime

from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser

from .models import Post
from .serializers import Serializers


@csrf_exempt
@api_view(['GET', 'POST'])
def post_list(request):
    if request.method == 'POST':
        post_data = JSONParser().parse(request)
        post_serializer = Serializers(data=post_data)
        if post_serializer.is_valid():
            dic = {'register_date': datetime.datetime.utcnow().isoformat()}
            post_serializer.save(**dic)
            return JsonResponse(post_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        posts = Post.objects.all()

        title = request.GET.get('title', None)
        if title is not None:
            posts = posts.filter(title__icontains=title)

        post_serializer = Serializers(posts, many=True)
        return JsonResponse(post_serializer.data, safe=False)


@csrf_exempt
@api_view(['GET', 'POST'])
def post_detail(request, post_id):
    try:
        if request.method == 'GET':
            post = Post.objects.get(id=post_id)
            post_serializer = Serializers(post)
            return JsonResponse(post_serializer.data)
    except Post.DoesNotExist:
        return JsonResponse({'message': 'The post does not exist'}, status=status.HTTP_404_NOT_FOUND)
