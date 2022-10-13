from rest_framework import serializers
from django.forms import ValidationError

from usuario.models import Usuario

class UsuarioSerializers(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class CadastroUsuarioSerializers(serializers.Serializer):
    email = serializers.EmailField()

    senha = serializers.CharField(
        max_length = 255
    )

    nome = serializers.CharField(
        max_length = 255
    )

    descricao = serializers.CharField()

    def validate_nome(self, value):
        if len(value) < 3:
            raise ValidationError("Deve se ter pelo menos 3 caracteres")
        return value

    def validate_senha(self, value):
        if len(value) < 8:
            raise ValidationError("Deve se ter pelo menos 8 caracteres")
        return value