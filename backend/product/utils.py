from .models import Cart


def get_cart_and_products_in_cart(request):
    if request.user.is_authenticated:
        cart = Cart.objects.filter(in_order=False, for_anonymous_user=False, owner=request.user.customer).first()
        products_in_cart = [cp.product.id for cp in cart.products.all()]
    else:
        cart = Cart.objects.filter(for_anonymous_user=True).first()
        products_in_cart = []
    return cart, products_in_cart
