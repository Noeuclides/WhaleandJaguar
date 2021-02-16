from django.shortcuts import render


def index(request):
    print(f'REQUEST!!-->> {request}')
    return render(request, 'frontend/index.html')
