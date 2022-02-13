from rest_framework import permissions


class GroupPermission_inner(permissions.BasePermission):
    message = 'Adding customers not allowed.'
    # method_check_dict = {}
    model=""
    app_label=""
    # def __init__(self, method_check_dict):
    #     self.method_check_dict = method_check_dict

    def has_permission(self, request, view):


        # "ssssssssssssssssssssssssssssssssssssss",request.user.get_user_permissions(),
        print(request,"dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",request.user.get_all_permissions())
        # request.user.groups.all())
        # dir(request.user)
        # print(dir(request))
        # print(dir(view),view.perform_authentication)
        # if request.method == "GET" and f"{self.model}.view_{self.model}" in request.user.get_all_permissions:
        #     return True
        # if request.method == "POST" and f"{self.app_label}.add_{self.model}" in request.user.get_all_permissions:
        #     return True
        # if request.method == "GET" and f"{self.model}.view_user" in request.user.get_all_permissions:
        #     return True
        # if request.method == "GET" and f"{self.model}.view_user" in request.user.get_all_permissions:
        #     return True
        # if request.method == "GET" and f"{self.model}.view_user" in request.user.get_all_permissions:
        #     return True

        if request.method in permissions.SAFE_METHODS:
            return True
        # else:
        #     if request.user.is_anonymous:
        #         return False
        #     if request.user.is_developer:
        #         return True
        #     if request.user.is_coreTeam:
        #         return True

    def has_object_permission(self, request, view, obj):
        pass
