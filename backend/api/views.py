from rest_framework.response import Response
from rest_framework.decorators import api_view
from account.models import Account
from .serializers import AccountSerializer

@api_view(["GET"])
def getData(request):
    accounts = Account.objects.all() 
    serializer = AccountSerializer(accounts, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def addAccount(request):
    serializer = AccountSerializer(data=request.data)

    if serializer.is_valid() == True:
        serializer.save()
        return Response(serializer.data)