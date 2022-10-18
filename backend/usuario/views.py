from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from usuario.models import Usuario
from usuario.serializers import UsuarioSerializers

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializers