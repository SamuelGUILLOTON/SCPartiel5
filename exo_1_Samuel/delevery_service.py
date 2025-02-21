class Package:
    def __init__(self, weight: float, distance: float):
        if weight < 0:
            raise ValueError("Invalid weight!")
        self.weight = weight
        self.distance = distance

    def base_price(self) -> float:
        price = self.distance * 0.1
        if self.weight > 10:
            price += 5
        elif self.weight > 5:
            price += 3
        return price

class DiscountStrategy:
    @staticmethod
    def apply_customer_discount(price: float, customer_type: str) -> float:
        discounts = {"VIP": 0.8, "Business": 0.9}
        return price * discounts.get(customer_type, 1.0)
    
    @staticmethod
    def apply_bulk_discount(price: float, package_count: int) -> float:
        return price * 0.95 if package_count > 3 else price

    @staticmethod
    def apply_urgency_surcharge(price: float, urgent: bool) -> float:
        return price * 1.5 if urgent else price

class DeliveryService:
    def calculate_delivery_price(self, packages: list[Package], customer_type: str, urgent: bool) -> float:
        total = sum(pkg.base_price() for pkg in packages)
        total = DiscountStrategy.apply_urgency_surcharge(total, urgent)
        total = DiscountStrategy.apply_customer_discount(total, customer_type)
        total = DiscountStrategy.apply_bulk_discount(total, len(packages))
        return total

    def print_invoice(self, packages: list[Package], customer_type: str) -> None:
        price = self.calculate_delivery_price(packages, customer_type, urgent=False)
        print(f"Total: {price}")
        if price > 100:
            print("Apply special discount next time!")

# Exemple d'utilisation
packages = [Package(6, 50), Package(12, 30), Package(4, 20)]
delivery_service = DeliveryService()
delivery_service.print_invoice(packages, "VIP")
