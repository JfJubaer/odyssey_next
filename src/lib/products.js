import { DEFAULT_PRODUCTS, LOCAL_PRODUCTS_STORAGE_KEY } from "@/data/product";

function normalizeProductShape(product) {
  const description =
    product.description || product.fullDescription || product.shortDescription || "";

  const specs =
    Array.isArray(product.specs) && product.specs.length > 0
      ? product.specs
      : typeof product.specsText === "string" && product.specsText.trim().length > 0
        ? product.specsText
            .split(",")
            .map((spec) => spec.trim())
            .filter(Boolean)
        : ["General purpose", "User submitted item"];

  const normalizedPrice = Number(product.price);
  const normalizedRating = Number(product.rating);

  return {
    id: Number(product.id),
    title: product.title || "Untitled Product",
    category: product.category || "Uncategorized",
    price: Number.isFinite(normalizedPrice) ? normalizedPrice : 0,
    rating:
      Number.isFinite(normalizedRating) && normalizedRating > 0
        ? normalizedRating
        : 4.0,
    image: product.image || "🛍️",
    description,
    specs,
    userEmail: product.userEmail || "",
    date: product.date || "",
  };
}

export function getLocalProducts() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = localStorage.getItem(LOCAL_PRODUCTS_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.map(normalizeProductShape);
  } catch {
    return [];
  }
}

export function saveLocalProducts(products) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(LOCAL_PRODUCTS_STORAGE_KEY, JSON.stringify(products));
}

export function getMergedProducts(localProducts = []) {
  return [
    ...DEFAULT_PRODUCTS.map((product) => normalizeProductShape(product)),
    ...localProducts.map((product) => normalizeProductShape(product)),
  ];
}

export function buildLocalProduct(input) {
  return normalizeProductShape(input);
}
