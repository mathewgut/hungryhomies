from django.test import TestCase
from website.models import Post, CustomUser
from datetime import datetime

class PostTest(TestCase):
    def setUp(self):
        # creating a user object, CustomUser demands the user object itself as account value, not pk
        user = CustomUser.objects.create(user_birthday=datetime.now(), 
                                         user_program = "123", user_bio = "123", user_allergies = "123", 
                                         user_fav_food = "123", user_cmfrt_food = "123", 
)
        user.save()
        user_pk = user.pk
        # create amazing awesome test object
        Post.objects.create(account=user, title=f"kangaroo", description="is an animal", location="desert", meetup_time=datetime.now())
    def test_string_return(self):
        model_obj = Post.objects.get(title="kangaroo")
        # ensuring that the string the obj returns is equal to the title of the obj, formatted as documentation recommends
        self.assertEqual(str(model_obj), model_obj.title)
