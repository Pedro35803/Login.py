from rest_framework import serializers
from django.forms import ValidationError

from usuario.models import Usuario

class UsuarioSerializers(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

    def validate_nome(self, value):
        if len(value) < 3:
            raise ValidationError("Deve se ter pelo menos 3 caracteres")
        return value

    def validate_senha(self, value):
        if len(value) < 8:
            raise ValidationError("Deve se ter pelo menos 8 caracteres")
        return value