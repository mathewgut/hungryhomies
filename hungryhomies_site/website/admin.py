from django.contrib import admin

from .models import Post, CustomUser

from django.contrib.auth.admin import UserAdmin

#admin.site.register(Post)
admin.site.register(CustomUser, UserAdmin)

