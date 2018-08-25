from django.shortcuts import render
from .serializers import *
from rest_framework import generics

# Create your views here.

class PessoaList (generics.ListCreateAPIView):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer
    name = "pessoa-list"
    permission_classes = {

    }



class PessoaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaDetailSerializer
    name = "pessoa-detail"
    permission_classes = {

    }