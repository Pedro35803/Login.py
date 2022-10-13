# from django.shortcuts import render
from rest_framework.views import Response, APIView
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)

from usuario.models import Usuario
from usuario.serializers import UsuarioSerializers

class UsuarioApiView(APIView):
    def get(self, request, format = None):
        allUsuario = Usuario.objects.all()
        serializers = UsuarioSerializers(allUsuario, many = True)
        return Response(serializers.data, status = HTTP_200_OK)