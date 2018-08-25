
from django.contrib import admin
from django.urls import path
from pessoa import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('pessoas/', views.PessoaList.as_view(), name=views.PessoaList.name),
    path('pessoas/<int:pk>/', views.PessoaDetail.as_view(), name=views.PessoaDetail.name)
]
