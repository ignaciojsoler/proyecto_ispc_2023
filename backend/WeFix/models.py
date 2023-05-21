from django.db import models

class Profesion(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name_plural = "Profesiones"
        db_table = "profesion"
        verbose_name = "Profesion"

class TipoUsuario(models.Model):
    tipo = models.CharField(max_length=100)

    def __str__(self):
        return self.tipo

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    tipo_usuario = models.ForeignKey(TipoUsuario, on_delete=models.CASCADE)
    direccion = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=100)
    provincia = models.CharField(max_length=100)
    pais = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"
    
    class Meta:
        verbose_name_plural = "Clientes"
        db_table = "cliente"
        verbose_name = "Información del cliente"

class Trabajador(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    tipo_usuario = models.ForeignKey(TipoUsuario, on_delete=models.CASCADE)
    profesion = models.ForeignKey(Profesion, on_delete=models.CASCADE)
    descripcion = models.TextField()
    precio_hora = models.DecimalField(max_digits=8, decimal_places=2)
    estado_membresia = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

    class Meta:
        verbose_name_plural = "Trabajadores"
        db_table = "trabajador"
        verbose_name = "Información del trabajador"
