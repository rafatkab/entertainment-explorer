from rest_framework.response import Response
from rest_framework.decorators import api_view
from account_management.models import *
from .serializers import *

@api_view(["GET"]) 
def get_all_accounts(request):
    accounts = Account.objects.all()
    serializer = AccountSerializer(accounts, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def add_account(request):
    serializer = AccountSerializer(data=request.data)

    if serializer.is_valid() == True:
        serializer.save()
        return Response(serializer.data)

@api_view(["GET", "DELETE", "PUT"])
def movie_rating(request, movie_id):
    try:
        rating = MovieRatingsList.objects.get(movie_id=movie_id)
        
        if request.method == "GET":
            return Response(True)
        
        elif request.method == "DELETE":
            operation = rating.delete()
            return Response(True)
        
        elif request.method == "PUT":
            serializer = MovieRatingsListSerializer(rating, data=request.data)
            
            if serializer.is_valid() == True:
                serializer.save()
                return Response(serializer.data)
    
    except:
        if request.method == "GET":
            return Response(False)
        
@api_view(["GET", "POST"])
def movie_ratings(request):
    if request.method == "GET":
        ratings = MovieRatingsList.objects.all().order_by('-rating')
        serializer = MovieRatingsListSerializer(ratings, many=True)
        return Response(serializer.data)
    
    elif request.method == "POST":
        serializer = MovieRatingsListSerializer(data=request.data)

        if serializer.is_valid() == True:
            serializer.save()
            return Response(serializer.data)