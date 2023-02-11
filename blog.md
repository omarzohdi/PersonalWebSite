**[Home](https://omarzohdi.github.io/) >> Blog**

{% for post in site.posts %}
  <div class="card">
      <h3>{{ post.title }}</h3>
      <p>{{ post.blob}}</p>
      <a href="{{ post.url }}"><span class="card-link-spanner"></span></a>
  </div>
{% endfor %}

