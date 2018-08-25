from rest_framework import serializers
from .models import *

class PessoaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pessoa
        fields = ("nome", "sobrenome", "email", "formacao")

class PessoaDetailSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pessoa
        fields = ("nome", "sobrenome", "email", "formacao")