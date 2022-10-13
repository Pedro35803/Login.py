from django.shortcuts import get_object_or_404
from rest_framework.views import Response, APIView
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)

from usuario.models import Usuario
from usuario.serializers import (
    UsuarioSerializers, 
    CadastroUsuarioSerializers
)

class UsuarioApiView(APIView):
    def get(self, request, format = None):
        allUsuario = Usuario.objects.all()
        serializers = UsuarioSerializers(allUsuario, many = True)
        return Response(serializers.data, status = HTTP_200_OK)


class CadastrarUsuarioApiView(APIView):
    def post(self, request, id, format = None):
        serializer = CadastroUsuarioSerializers(data = request.data)

        if serializer.is_valid():
            user = Usuario(
                descricao = serializer.validated_data.get('descricao'),
                email = serializer.validated_data.get('email'),
                senha = serializer.validated_data.get('senha'),
                nome = serializer.validated_data.get('nome'),
            )

            user.save()
            user_serializer = UsuarioSerializers(user, many = False)
            return Response(user_serializer.data, status = HTTP_201_CREATED)

        return Response(serializer.errors, status = HTTP_400_BAD_REQUEST)