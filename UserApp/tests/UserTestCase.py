from django.test import TestCase
from UserApp.models import User

class UserTestCase(TestCase):
    def setUp(self):
        User.objects.create(email="cooluser@seven.com", password="heybro",First_name='cool',Last_name='user')


    def test_basic_user_creation(self):
        user = User.objects.get(email="cooluser@seven.com")
        self.assertEqual(user.is_developer, False)
        self.assertEqual(user.is_coreTeam, False)
        self.assertEqual(user.is_superuser, False)
        self.assertEqual(user.is_active, False)

    def test_updating_user_creation(self):
        user = User.objects.get(email="cooluser@seven.com")
        self.assertEqual(user.is_active, False)
        user.is_active=True
        user.save()
        self.assertEqual(user.is_active, True)

    


