from rest_framework import viewsets

from usuario.models import Usuario
from usuario.serializers import UsuarioSerializers

class UserViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializers