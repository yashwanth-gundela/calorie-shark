from django.utils.decorators import method_decorator
from django.http import JsonResponse
from rest_framework import generics
from .models import text
from .serializers import TextSerializer
from django.views import View
import requests
from django.views.decorators.csrf import csrf_exempt
import json

class TextCreateList(generics.ListCreateAPIView):
    serializer_class = TextSerializer

    def get_queryset(self):
        querset = text.objects.all()
        texts = self.request.query_params.get('text')
        if text is not None:
            querset = querset.filter(text=texts)
        return querset
    
@method_decorator(csrf_exempt, name='dispatch')
class CalorieSharkAPI(View):
    def post(self, request):
        # Get the text input from the form
        data = json.loads(request.body)
            # Access the 'text' value from the JSON data
        text = data.get('text')
        
        api_url = 'https://api.calorieninjas.com/v1/nutrition?query='
        query = text #or 'Biryani 100g'
        # ab = {'message': f'Text received: {text}'}
        # return JsonResponse(ab)
        response = requests.get(api_url + query, headers={'X-Api-Key': '7/bwNp0UfMzZnokZKJoDcA==oTCjuZAyUkxMnbRU'})
        # Check if the request was successful
        if response.status_code == requests.codes.ok :
            # Return the API response data as JSON
            return JsonResponse(response.json())
        else:
            # If the request failed, return an error message
            return JsonResponse({'error': 'Failed to fetch data from the API'}, status=response.status_code)

    def get(self, request):
        # Return a method not allowed error if the request method is not POST
        return JsonResponse({'error': 'Method not allowed'}, status=405)