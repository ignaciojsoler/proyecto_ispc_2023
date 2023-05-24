from django.contrib import admin
from .models import Cliente, Trabajador, Profesion, TipoUsuario

class ClienteAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'apellido', 'email', 'tipo_usuario']

class TrabajadorAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'apellido', 'email', 'tipo_usuario', 'profesion']

class ProfesionAdmin(admin.ModelAdmin):
    list_display = ['nombre']

class TipoUsuarioAdmin(admin.ModelAdmin):
    list_display = ['tipo']

admin.site.register(Cliente)
admin.site.register(Trabajador)
admin.site.register(Profesion)
admin.site.register(TipoUsuario)