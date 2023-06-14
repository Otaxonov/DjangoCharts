from django.shortcuts import render

# Create your views here.


def ChartView(request):

    context = {
        "title": "Django Chart App"
    }

    return render(request, 'chart/chart.html', context)
