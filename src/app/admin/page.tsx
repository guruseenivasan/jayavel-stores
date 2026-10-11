"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { Product, Category, CATEGORIES } from "@/data/products";

export default function AdminPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authChecking, setAuthChecking] = useState<boolean>(false);
  const [loginUser, setLoginUser] = useState<string>("admin");
  const [loginPass, setLoginPass] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");
  const [loginLoading, setLoginLoading] = useState<boolean>(false);

  // Data State
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>(CATEGORIES);
  const [loading, setLoading] = useState<boolean>(true);
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>("all");
  const [stockFilter, setStockFilter] = useState<"all" | "inStock" | "outOfStock">("all");
  const [sortBy, setSortBy] = useState<"newest" | "priceAsc" | "priceDesc" | "name">("newest");

  // Modal / Drawer State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] = useState<boolean>(false);
  const [newCatName, setNewCatName] = useState<string>("");

  // Product Form State
  const [formCategory, setFormCategory] = useState<string>(CATEGORIES[0].name);
  const [formCategorySlug, setFormCategorySlug] = useState<string>(CATEGORIES[0].slug);
  const [formTitle, setFormTitle] = useState<string>("");
  const [formTamilTitle, setFormTamilTitle] = useState<string>("");
  const [formPrice, setFormPrice] = useState<string>("");
  const [formOriginalPrice, setFormOriginalPrice] = useState<string>("");
  const [formImage, setFormImage] = useState<string>("");
  const [formDescription, setFormDescription] = useState<string>("");
  const [formTamilDescription, setFormTamilDescription] = useState<string>("");
  const [formFeatures, setFormFeatures] = useState<string>("");
  const [formMaterial, setFormMaterial] = useState<string>("Pure Sandcast Bell Brass");
  const [formWeight, setFormWeight] = useState<string>("");
  const [formHeight, setFormHeight] = useState<string>("");
  const [formOrigin, setFormOrigin] = useState<string>("Madurai Traditional Craft");
  const [formTag, setFormTag] = useState<string>("New Arrival");
  const [formInStock, setFormInStock] = useState<boolean>(true);

  // Image Upload State
  const [uploadingImage, setUploadingImage] = useState<boolean>(false);
  const [autoWhiteBg, setAutoWhiteBg] = useState<boolean>(true);
  const [imageUploadError, setImageUploadError] = useState<string>("");
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form saving state
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // Check auth on mount
  useEffect(() => {
    const token = localStorage.getItem("jayavel_admin_token");
    if (token) {
      setIsAuthenticated(true);
    }
    setAuthChecking(false);
  }, []);

  // Fetch products and categories when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadProducts();
      loadCategories();
    }
  }, [isAuthenticated]);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  const loadProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      if (data.success && Array.isArray(data.products)) {
        setProducts(data.products);
      }
    } catch {
      showToast("Failed to load products", "error");
    } finally {
      setLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      const res = await fetch("/api/categories");
      const data = await res.json();
      if (data.success && Array.isArray(data.categories)) {
        setCategories(data.categories);
      }
    } catch {
      // fallback
    }
  };

  // Auth Handlers
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: loginUser, password: loginPass }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem("jayavel_admin_token", data.token);
        setIsAuthenticated(true);
        showToast("Signed in successfully as Administrator");
      } else {
        setLoginError(data.error || "Invalid username or password");
      }
    } catch {
      setLoginError("Could not reach authentication server");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jayavel_admin_token");
    setIsAuthenticated(false);
  };

  // Image Upload Handler
  const uploadImageFile = async (file: File) => {
    setImageUploadError("");
    setUploadingImage(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("whiteBg", autoWhiteBg ? "true" : "false");

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success && data.url) {
        setFormImage(data.url);
        if (data.whiteStandardized) {
          showToast("✨ Standardized to Option 1: Clean Studio White (crisp soft contact shadow)!");
        } else {
          showToast("Image uploaded successfully!");
        }
      } else {
        setImageUploadError(data.error || "Failed to upload image");
      }
    } catch {
      setImageUploadError("Network error while uploading image");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadImageFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      uploadImageFile(file);
    } else {
      setImageUploadError("Please drop an image file (JPG, PNG, WEBP)");
    }
  };

  // Open Modal for Create
  const handleOpenCreateModal = () => {
    setModalMode("create");
    setEditingProductId(null);
    const defaultCat = categories[0] || CATEGORIES[0];
    setFormCategory(defaultCat.name);
    setFormCategorySlug(defaultCat.slug);
    setFormTitle("");
    setFormTamilTitle("");
    setFormPrice("");
    setFormOriginalPrice("");
    setFormImage("");
    setFormDescription("");
    setFormTamilDescription("");
    setFormFeatures("Virgin Grade Metal Alloy\nHandcrafted by Madurai Master Artisans\nLifetime Durability Guarantee");
    setFormMaterial("Pure Sandcast Bell Brass");
    setFormWeight("");
    setFormHeight("");
    setFormOrigin("Madurai Traditional Workshop");
    setFormTag("New Arrival");
    setFormInStock(true);
    setImageUploadError("");
    setIsModalOpen(true);
  };

  // Open Modal for Edit
  const handleOpenEditModal = (product: Product) => {
    setModalMode("edit");
    setEditingProductId(product.id);
    setFormCategory(product.category);
    setFormCategorySlug(product.categorySlug);
    setFormTitle(product.title);
    setFormTamilTitle(product.tamilTitle || "");
    setFormPrice(product.price.toString());
    setFormOriginalPrice(product.originalPrice ? product.originalPrice.toString() : "");
    setFormImage(product.image);
    setFormDescription(product.description || "");
    setFormTamilDescription(product.tamilDescription || "");
    setFormFeatures(product.features ? product.features.join("\n") : "");
    setFormMaterial(product.material || "Pure Sandcast Bell Brass");
    setFormWeight(product.weight || "");
    setFormHeight(product.height || "");
    setFormOrigin(product.origin || "");
    setFormTag(product.tag || "");
    setFormInStock(product.inStock);
    setImageUploadError("");
    setIsModalOpen(true);
  };

  // Save Product (Create or Edit)
  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formTitle.trim()) {
      showToast("Please enter product title", "error");
      return;
    }
    if (!formImage.trim()) {
      showToast("Please upload or provide an image for the product", "error");
      return;
    }
    if (!formPrice || isNaN(Number(formPrice)) || Number(formPrice) <= 0) {
      showToast("Please enter a valid price money (in ₹)", "error");
      return;
    }
    if (!formDescription.trim()) {
      showToast("Please enter product description", "error");
      return;
    }

    setIsSaving(true);

    const payload = {
      title: formTitle,
      tamilTitle: formTamilTitle || formTitle,
      category: formCategory,
      categorySlug: formCategorySlug,
      price: Number(formPrice),
      originalPrice: formOriginalPrice ? Number(formOriginalPrice) : Math.round(Number(formPrice) * 1.15),
      image: formImage,
      description: formDescription,
      tamilDescription: formTamilDescription || formDescription,
      features: formFeatures,
      material: formMaterial,
      weight: formWeight,
      height: formHeight,
      origin: formOrigin,
      tag: formTag,
      inStock: formInStock,
    };

    try {
      if (modalMode === "create") {
        const res = await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          showToast(`Product "${formTitle}" added successfully!`);
          setIsModalOpen(false);
          loadProducts();
          loadCategories();
        } else {
          showToast(data.error || "Failed to create product", "error");
        }
      } else {
        const res = await fetch("/api/products", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingProductId, ...payload }),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          showToast(`Product updated successfully!`);
          setIsModalOpen(false);
          loadProducts();
        } else {
          showToast(data.error || "Failed to update product", "error");
        }
      }
    } catch {
      showToast("Network error while saving product", "error");
    } finally {
      setIsSaving(false);
    }
  };

  // Toggle inStock directly
  const handleToggleStock = async (product: Product) => {
    try {
      const updatedStock = !product.inStock;
      const res = await fetch("/api/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: product.id, inStock: updatedStock }),
      });
      if (res.ok) {
        setProducts((prev) =>
          prev.map((p) => (p.id === product.id ? { ...p, inStock: updatedStock } : p))
        );
        showToast(`${product.title} marked as ${updatedStock ? "In Stock" : "Out of Stock"}`);
      }
    } catch {
      showToast("Failed to update stock status", "error");
    }
  };

  // Delete Product
  const handleDeleteProduct = async (id: string) => {
    try {
      const res = await fetch(`/api/products?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast("Product deleted successfully");
        setProducts((prev) => prev.filter((p) => p.id !== id));
        setDeleteConfirmId(null);
        loadCategories();
      } else {
        showToast(data.error || "Failed to delete product", "error");
      }
    } catch {
      showToast("Network error while deleting product", "error");
    }
  };

  // Add New Category
  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCatName.trim() }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast(`Category "${newCatName}" created!`);
        setNewCatName("");
        setIsNewCategoryModalOpen(false);
        loadCategories();
      } else {
        showToast(data.error || "Failed to create category", "error");
      }
    } catch {
      showToast("Network error while creating category", "error");
    }
  };

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategoryFilter !== "all") {
          const matchSlug = p.categorySlug === selectedCategoryFilter;
          const matchName = p.category.toLowerCase().includes(selectedCategoryFilter.toLowerCase());
          if (!matchSlug && !matchName) return false;
        }

        // Stock filter
        if (stockFilter === "inStock" && !p.inStock) return false;
        if (stockFilter === "outOfStock" && p.inStock) return false;

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchTamil = p.tamilTitle?.toLowerCase().includes(q);
          const matchId = p.id.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          const matchCat = p.category.toLowerCase().includes(q);
          if (!matchTitle && !matchTamil && !matchId && !matchDesc && !matchCat) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "priceAsc") return a.price - b.price;
        if (sortBy === "priceDesc") return b.price - a.price;
        if (sortBy === "name") return a.title.localeCompare(b.title);
        return 0; // newest first by default array order
      });
  }, [products, selectedCategoryFilter, stockFilter, searchQuery, sortBy]);

  // Auth checking skeleton
  if (authChecking) {
    return (
      <div className="min-h-screen bg-[#fcf9f8] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#7c1d24]"></div>
      </div>
    );
  }

  // ----------------------------------------------------
  // LOGIN SCREEN (If not authenticated)
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#2a0812] via-[#48061d] to-[#1a040b] flex items-center justify-center p-4">
        {/* Toast */}
        {toastMessage && (
          <div
            className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl text-sm font-semibold flex items-center gap-2 text-white ${
              toastMessage.type === "success" ? "bg-emerald-700" : "bg-rose-700"
            }`}
          >
            <span>{toastMessage.text}</span>
          </div>
        )}

        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#d9c1c4]/30">
          {/* Header Banner */}
          <div className="bg-[#48061d] p-8 text-center text-white relative">
            <div className="w-16 h-16 mx-auto mb-3 bg-[#eec067]/20 border border-[#eec067] rounded-full flex items-center justify-center shadow-inner">
              <svg className="w-8 h-8 text-[#eec067]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-wide font-serif text-[#ffdea4]">JAYAVEL STORES</h1>
            <p className="text-xs uppercase tracking-widest text-white/80 mt-1">
              Admin &amp; Inventory Management Portal
            </p>
            <p className="text-[11px] text-[#ffdea4]/70 mt-1">Madurai Heritage Brassware &amp; Pooja Essentials</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="p-8 space-y-5">
            {loginError && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-center gap-2">
                <svg className="w-4 h-4 text-rose-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#534245] uppercase tracking-wider mb-1.5">
                Admin Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={loginUser}
                  onChange={(e) => setLoginUser(e.target.value)}
                  placeholder="admin"
                  className="w-full px-4 py-3 bg-[#fcf9f8] border border-[#d9c1c4] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#7c1d24] text-[#1b1c1c]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#534245] uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-4 py-3 bg-[#fcf9f8] border border-[#d9c1c4] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#7c1d24] text-[#1b1c1c]"
                />
              </div>
            </div>

            {/* Quick Helper Badge */}
            <div className="p-3 bg-[#fff9ea] border border-[#f3ddab] rounded-xl text-xs text-[#7c5b16] flex items-center justify-between">
              <div>
                <span className="font-semibold">Default Credentials:</span>
                <span className="ml-1 font-mono">admin / admin123</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setLoginUser("admin");
                  setLoginPass("admin123");
                }}
                className="text-[11px] font-bold text-[#966710] underline hover:text-[#48061d]"
              >
                Auto Fill
              </button>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3.5 bg-[#7c1d24] hover:bg-[#5e1319] text-white font-bold rounded-xl text-sm shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loginLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Admin Portal</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>

            <div className="text-center pt-2">
              <Link href="/" className="text-xs text-[#534245] hover:text-[#7c1d24] transition-colors">
                ← Return to Public Storefront
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // AUTHENTICATED ADMIN DASHBOARD
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl text-sm font-semibold flex items-center gap-2 text-white animate-fade-in ${
            toastMessage.type === "success" ? "bg-emerald-700" : "bg-rose-700"
          }`}
        >
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Top Admin Navbar */}
      <header className="bg-[#48061d] text-white border-b border-[#eec067]/30 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#eec067] text-[#48061d] flex items-center justify-center font-bold text-lg shadow">
              JV
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-base tracking-wide font-serif text-[#ffdea4]">JAYAVEL STORES</h1>
                <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full">
                  Admin Active
                </span>
              </div>
              <p className="text-[11px] text-white/70">Category Image Upload &amp; Inventory Manager</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/categories"
              target="_blank"
              className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors border border-white/10"
            >
              <span>View Live Store</span>
              <svg className="w-3.5 h-3.5 text-[#eec067]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>

            <button
              onClick={handleOpenCreateModal}
              className="px-4 py-2 bg-[#eec067] hover:bg-[#dfaf53] text-[#48061d] font-bold rounded-xl text-xs flex items-center gap-2 shadow hover:shadow-lg transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              <span>Upload New Product</span>
            </button>

            <button
              onClick={handleLogout}
              title="Sign Out"
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs transition-colors border border-white/10 cursor-pointer"
            >
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded-2xl border border-[#e5e2e1] shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#534245]">Total Products</span>
            <div className="text-2xl font-extrabold text-[#48061d] mt-1">{products.length}</div>
            <span className="text-[11px] text-emerald-600 font-medium">In Madurai catalog</span>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-[#e5e2e1] shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#534245]">Categories</span>
            <div className="text-2xl font-extrabold text-[#7c1d24] mt-1">{categories.length}</div>
            <button
              onClick={() => setIsNewCategoryModalOpen(true)}
              className="text-[11px] text-[#7c1d24] hover:underline font-semibold"
            >
              + Add new category
            </button>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-[#e5e2e1] shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#534245]">In Stock</span>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">
              {products.filter((p) => p.inStock).length}
            </div>
            <span className="text-[11px] text-emerald-600 font-medium">Ready for dispatch</span>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-[#e5e2e1] shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#534245]">Out of Stock</span>
            <div className="text-2xl font-extrabold text-amber-700 mt-1">
              {products.filter((p) => !p.inStock).length}
            </div>
            <span className="text-[11px] text-amber-600 font-medium">Requires crafting</span>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="bg-white p-4 rounded-2xl border border-[#e5e2e1] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#48061d]">
              Filter by Particular Category
            </h2>
            <button
              onClick={() => setIsNewCategoryModalOpen(true)}
              className="text-xs font-bold text-[#7c1d24] hover:text-[#48061d] flex items-center gap-1 cursor-pointer"
            >
              <span>+ Add Category</span>
            </button>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            <button
              onClick={() => setSelectedCategoryFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                selectedCategoryFilter === "all"
                  ? "bg-[#7c1d24] text-white shadow-sm"
                  : "bg-[#f6f3f2] text-[#534245] hover:bg-[#ece8e7]"
              }`}
            >
              <span>All Items</span>
              <span className="text-[10px] opacity-80 bg-black/10 px-1.5 py-0.5 rounded-full">
                {products.length}
              </span>
            </button>

            {categories.map((cat) => {
              const count = products.filter(
                (p) => p.categorySlug === cat.slug || p.category.toLowerCase().includes(cat.name.toLowerCase())
              ).length;
              const isSelected = selectedCategoryFilter === cat.slug;

              return (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategoryFilter(cat.slug)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#7c1d24] text-white shadow-sm"
                      : "bg-[#f6f3f2] text-[#534245] hover:bg-[#ece8e7]"
                  }`}
                >
                  <span>{cat.name.split("(")[0].trim()}</span>
                  <span className="text-[10px] opacity-80 bg-black/10 px-1.5 py-0.5 rounded-full">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search, Filter, Sort and Action Controls */}
        <div className="bg-white p-4 rounded-2xl border border-[#e5e2e1] shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search products by title, Tamil name, ID, or material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#fcf9f8] border border-[#d9c1c4] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#7c1d24]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Stock Filter */}
            <select
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value as "all" | "inStock" | "outOfStock")}
              className="px-3 py-2 bg-[#fcf9f8] border border-[#d9c1c4] rounded-xl text-xs text-[#534245] focus:outline-none"
            >
              <option value="all">All Stock Status</option>
              <option value="inStock">In Stock Only</option>
              <option value="outOfStock">Out of Stock</option>
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "newest" | "priceAsc" | "priceDesc" | "name")}
              className="px-3 py-2 bg-[#fcf9f8] border border-[#d9c1c4] rounded-xl text-xs text-[#534245] focus:outline-none"
            >
              <option value="newest">Sort: Default / Newest</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>

            {/* Reload button */}
            <button
              onClick={loadProducts}
              title="Refresh Products"
              className="p-2 bg-[#f6f3f2] hover:bg-[#ece8e7] text-[#534245] rounded-xl transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-2xl border border-[#e5e2e1] shadow-sm overflow-hidden">
          <div className="p-4 border-b border-[#e5e2e1] flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#48061d]">
              Products List{" "}
              <span className="text-xs font-normal text-[#534245]">
                ({filteredProducts.length} of {products.length} shown)
              </span>
            </h3>

            <button
              onClick={handleOpenCreateModal}
              className="px-3 py-1.5 bg-[#7c1d24] hover:bg-[#5e1319] text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow transition-all cursor-pointer"
            >
              <span>+ Add Product</span>
            </button>
          </div>

          {loading ? (
            <div className="p-12 text-center text-xs text-[#534245] flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-[#7c1d24] border-t-transparent rounded-full animate-spin"></div>
              <span>Loading products...</span>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="p-12 text-center text-[#534245] space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#f6f3f2] flex items-center justify-center text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <p className="text-sm font-semibold">No products match your filter</p>
              <p className="text-xs text-gray-500">Try choosing a different category or clearing the search query.</p>
              <button
                onClick={() => {
                  setSelectedCategoryFilter("all");
                  setSearchQuery("");
                  setStockFilter("all");
                }}
                className="px-3 py-1.5 bg-[#f6f3f2] text-xs font-bold rounded-lg text-[#7c1d24] hover:bg-[#ece8e7]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#fcf9f8] border-b border-[#e5e2e1] text-[#534245] font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4">Item &amp; Image</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Price Money</th>
                    <th className="py-3 px-4">Specifications</th>
                    <th className="py-3 px-4 text-center">Stock</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e2e1]">
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-[#faf6f5] transition-colors">
                      {/* Image & Title */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 border border-[#e5e2e1] shrink-0 relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  "https://placehold.co/100x100/7c1d24/ffffff?text=Jayavel";
                              }}
                            />
                          </div>
                          <div className="max-w-xs space-y-0.5">
                            <span className="font-mono text-[10px] text-gray-500">{product.id}</span>
                            <div className="font-bold text-[#1b1c1c] line-clamp-1 text-sm">{product.title}</div>
                            {product.tamilTitle && (
                              <div className="text-[11px] text-[#7c1d24] line-clamp-1">{product.tamilTitle}</div>
                            )}
                            {product.tag && (
                              <span className="inline-block px-1.5 py-0.2 bg-[#fff3dc] text-[#9b6a15] rounded text-[10px] font-semibold border border-[#eed09a]">
                                {product.tag}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-[#f3edf0] text-[#48061d] rounded-lg font-semibold text-[11px] inline-block">
                          {product.category}
                        </span>
                      </td>

                      {/* Price Money */}
                      <td className="py-3 px-4">
                        <div className="space-y-0.5">
                          <div className="font-extrabold text-[#7c1d24] text-sm">
                            ₹{product.price.toLocaleString("en-IN")}
                          </div>
                          {product.originalPrice && product.originalPrice > product.price && (
                            <div className="text-[11px] text-gray-400 line-through">
                              ₹{product.originalPrice.toLocaleString("en-IN")}
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Specifications */}
                      <td className="py-3 px-4 text-gray-600">
                        <div className="space-y-0.5 text-[11px]">
                          <div>
                            <span className="font-semibold text-gray-700">Material:</span> {product.material}
                          </div>
                          {product.weight && (
                            <div>
                              <span className="font-semibold text-gray-700">Weight:</span> {product.weight}
                            </div>
                          )}
                          {product.height && (
                            <div>
                              <span className="font-semibold text-gray-700">Height:</span> {product.height}
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Stock Switch */}
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => handleToggleStock(product)}
                          title="Click to toggle stock"
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                            product.inStock
                              ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border border-emerald-300"
                              : "bg-rose-100 text-rose-800 hover:bg-rose-200 border border-rose-300"
                          }`}
                        >
                          {product.inStock ? "● In Stock" : "○ Sold Out"}
                        </button>
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <Link
                            href={`/products/${product.slug}`}
                            target="_blank"
                            title="View on store"
                            className="p-1.5 text-gray-500 hover:text-[#7c1d24] hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-200"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </Link>

                          <button
                            onClick={() => handleOpenEditModal(product)}
                            title="Edit Product"
                            className="p-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>

                          <button
                            onClick={() => setDeleteConfirmId(product.id)}
                            title="Delete Product"
                            className="p-1.5 text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* ---------------------------------------------------- */}
      {/* PRODUCT CREATE / EDIT MODAL                          */}
      {/* ---------------------------------------------------- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-[#d9c1c4]">
            {/* Modal Header */}
            <div className="bg-[#48061d] p-5 text-white flex items-center justify-between border-b border-[#eec067]/30">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#eec067] text-[#48061d] flex items-center justify-center font-bold">
                  {modalMode === "create" ? "+" : "✎"}
                </div>
                <div>
                  <h3 className="font-bold text-base font-serif text-[#ffdea4]">
                    {modalMode === "create" ? "Add & Upload Product to Category" : "Edit Product Details"}
                  </h3>
                  <p className="text-xs text-white/70">
                    Category selection, image upload, price money, and item description
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-sm transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSaveProduct} className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left 7 cols: Form inputs */}
                <div className="lg:col-span-7 space-y-5">
                  {/* Category Selection */}
                  <div className="p-4 bg-[#fffbf5] border border-[#f3ddab] rounded-2xl space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-[#48061d] uppercase tracking-wider">
                        1. Target Category <span className="text-rose-600">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsNewCategoryModalOpen(true)}
                        className="text-[11px] font-bold text-[#7c1d24] hover:underline"
                      >
                        + Create Custom Category
                      </button>
                    </div>
                    <select
                      value={formCategorySlug}
                      onChange={(e) => {
                        const sel = categories.find((c) => c.slug === e.target.value);
                        if (sel) {
                          setFormCategorySlug(sel.slug);
                          setFormCategory(sel.name);
                        }
                      }}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#d9c1c4] rounded-xl text-xs font-semibold text-[#1b1c1c] focus:outline-none focus:ring-2 focus:ring-[#7c1d24]"
                    >
                      {categories.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                    <p className="text-[11px] text-[#7c5b16]">
                      The uploaded product will appear directly under this particular category.
                    </p>
                  </div>

                  {/* Image Upload Zone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#48061d] uppercase tracking-wider block">
                      2. Product Image Upload <span className="text-rose-600">*</span>
                    </label>

                    {/* Drag and Drop Box */}
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragOver(true);
                      }}
                      onDragLeave={() => setIsDragOver(false)}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 ${
                        isDragOver
                          ? "border-[#7c1d24] bg-[#fbf0f2]"
                          : formImage
                          ? "border-emerald-400 bg-emerald-50/40"
                          : "border-[#d9c1c4] bg-[#fcf9f8] hover:border-[#7c1d24] hover:bg-[#faf4f5]"
                      }`}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/png, image/jpeg, image/webp, image/svg+xml"
                        className="hidden"
                      />

                      {uploadingImage ? (
                        <div className="py-4 flex flex-col items-center gap-2">
                          <div className="w-8 h-8 border-3 border-[#7c1d24] border-t-transparent rounded-full animate-spin"></div>
                          <span className="text-xs font-semibold text-[#7c1d24]">Uploading image to server...</span>
                        </div>
                      ) : formImage ? (
                        <div className="flex items-center gap-4 text-left w-full">
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-emerald-300 shadow shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={formImage} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Image Ready
                            </span>
                            <p className="text-[11px] text-gray-500 truncate">{formImage}</p>
                            <span className="text-[11px] text-[#7c1d24] font-semibold underline">
                              Click or drop new file to replace
                            </span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="w-12 h-12 rounded-full bg-[#f3edf0] text-[#7c1d24] flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#48061d]">
                              Drag &amp; drop product photo here, or <span className="text-[#7c1d24] underline">browse</span>
                            </p>
                            <p className="text-[11px] text-gray-400 mt-0.5">JPG, PNG, WEBP up to 15MB</p>
                          </div>
                        </>
                      )}
                    </div>

                    {imageUploadError && (
                      <p className="text-xs text-rose-600 font-semibold">{imageUploadError}</p>
                    )}

                    {/* Option 1: Clean Studio White Background Toggle */}
                    <div className="flex items-center justify-between p-3.5 bg-amber-50/80 border border-amber-200/90 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-sm shrink-0">
                          ✨
                        </span>
                        <div>
                          <div className="text-xs font-bold text-[#48061d]">
                            Option 1: Clean Studio White Background
                          </div>
                          <p className="text-[11px] text-[#7c5b16] mt-0.5 leading-snug">
                            Standard e-commerce catalog look with crisp soft contact shadows; highly uniform across all categories (statues, brass lamps, cookware, furniture).
                          </p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer shrink-0 ml-3">
                        <input
                          type="checkbox"
                          checked={autoWhiteBg}
                          onChange={(e) => setAutoWhiteBg(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#7c1d24]"></div>
                      </label>
                    </div>

                    {/* Option 1: AI Image Generation Prompt Standard */}
                    <div className="p-3.5 bg-[#fffaf0] border border-[#f3ddab] rounded-2xl space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-[#48061d] flex items-center gap-1.5">
                          <span className="px-1.5 py-0.5 rounded bg-[#7c1d24] text-white text-[10px] font-bold">
                            AI PROMPT
                          </span>
                          Option 1 AI Prompt Standard (Clean Studio White)
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const aiPrompt = `Clean Studio White – Standard e-commerce catalog look with crisp soft contact shadows; highly uniform across all categories (statues, brass lamps, cookware, furniture). Professional studio product photograph of ${formTitle || "handcrafted Indian brassware"}, perfectly centered on pure white (#FFFFFF) background, crisp soft contact drop shadow underneath, even diffused studio softbox lighting, ultra-sharp craftsmanship, commercial 8k catalog photography.`;
                            navigator.clipboard.writeText(aiPrompt);
                            showToast("📋 Option 1 AI Prompt copied to clipboard!");
                          }}
                          className="px-2.5 py-1 bg-white hover:bg-[#fbf0f2] text-[#7c1d24] border border-[#d9c1c4] rounded-lg text-[11px] font-bold shadow-sm transition-all flex items-center gap-1 cursor-pointer shrink-0"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                          </svg>
                          <span>Copy AI Prompt</span>
                        </button>
                      </div>
                      <p className="text-[10px] text-[#7c5b16] leading-relaxed">
                        Use this standardized prompt when generating product images with AI (Midjourney, ChatGPT, Imagen) to maintain 100% catalog uniformity:
                      </p>
                      <div className="p-2 bg-white rounded-xl border border-[#f0d8a8] text-[10px] font-mono text-gray-700 select-all leading-relaxed">
                        Clean Studio White – Standard e-commerce catalog look with crisp soft contact shadows; highly uniform across all categories (statues, brass lamps, cookware, furniture). Professional studio product photograph of {formTitle || "[Product Title]"}, pure white background (#FFFFFF), crisp contact drop shadow.
                      </div>
                    </div>

                    {/* Or URL Input */}
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-[11px] text-gray-400">Or image URL:</span>
                      <input
                        type="text"
                        placeholder="https://... or /uploads/..."
                        value={formImage}
                        onChange={(e) => setFormImage(e.target.value)}
                        className="flex-1 px-3 py-1.5 bg-[#fcf9f8] border border-[#d9c1c4] rounded-lg text-xs"
                      />
                    </div>
                  </div>

                  {/* Title & Tamil Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-[#48061d] uppercase tracking-wider block mb-1">
                        Product Title (English) <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Pure Sandcast Annam Vilakku 24 Inches"
                        value={formTitle}
                        onChange={(e) => setFormTitle(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#fcf9f8] border border-[#d9c1c4] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#7c1d24]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#48061d] uppercase tracking-wider block mb-1">
                        Tamil Title (தமிழ் பெயர்)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. பாரம்பரிய அன்னம் குத்து விளக்கு"
                        value={formTamilTitle}
                        onChange={(e) => setFormTamilTitle(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#fcf9f8] border border-[#d9c1c4] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#7c1d24]"
                      />
                    </div>
                  </div>

                  {/* Price Money & Original Price */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-[#fff9ea] border border-[#f3ddab] rounded-2xl">
                    <div>
                      <label className="text-xs font-bold text-[#7c1d24] uppercase tracking-wider block mb-1">
                        Price Money (₹) <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-gray-500">₹</span>
                        <input
                          type="number"
                          required
                          min="1"
                          placeholder="7850"
                          value={formPrice}
                          onChange={(e) => setFormPrice(e.target.value)}
                          className="w-full pl-8 pr-3.5 py-2.5 bg-white border border-[#d9c1c4] rounded-xl text-sm font-extrabold text-[#7c1d24] focus:outline-none focus:ring-2 focus:ring-[#7c1d24]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#534245] uppercase tracking-wider block mb-1">
                        MRP / Strike Price (₹)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-gray-400">₹</span>
                        <input
                          type="number"
                          min="1"
                          placeholder="9200 (shows discount)"
                          value={formOriginalPrice}
                          onChange={(e) => setFormOriginalPrice(e.target.value)}
                          className="w-full pl-8 pr-3.5 py-2.5 bg-white border border-[#d9c1c4] rounded-xl text-xs font-semibold text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#7c1d24]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="text-xs font-bold text-[#48061d] uppercase tracking-wider block mb-1">
                      Product Description <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Detailed artisanal description: casting technique, temple use, auspicious significance..."
                      value={formDescription}
                      onChange={(e) => setFormDescription(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#fcf9f8] border border-[#d9c1c4] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#7c1d24]"
                    />
                  </div>

                  {/* Tamil Description */}
                  <div>
                    <label className="text-xs font-bold text-[#48061d] uppercase tracking-wider block mb-1">
                      Tamil Description (தமிழ் விளக்கம் - Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="தமிழில் விரிவான விளக்கம்..."
                      value={formTamilDescription}
                      onChange={(e) => setFormTamilDescription(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#fcf9f8] border border-[#d9c1c4] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#7c1d24]"
                    />
                  </div>

                  {/* Features Bullet Points */}
                  <div>
                    <label className="text-xs font-bold text-[#48061d] uppercase tracking-wider block mb-1">
                      Key Highlights / Bullet Points (One per line)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Cu-Zn 60:40 alloy ratio&#10;5-Tier Threaded Modular Assembly&#10;Nachiarkoil Handcrafted (GI Tagged)"
                      value={formFeatures}
                      onChange={(e) => setFormFeatures(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#fcf9f8] border border-[#d9c1c4] rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#7c1d24]"
                    />
                  </div>

                  {/* Specs: Material, Weight, Height, Origin */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-[#534245] uppercase block mb-1">Material</label>
                      <input
                        type="text"
                        placeholder="Bell Brass"
                        value={formMaterial}
                        onChange={(e) => setFormMaterial(e.target.value)}
                        className="w-full px-3 py-2 bg-[#fcf9f8] border border-[#d9c1c4] rounded-xl text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#534245] uppercase block mb-1">Weight</label>
                      <input
                        type="text"
                        placeholder="5.2 kg"
                        value={formWeight}
                        onChange={(e) => setFormWeight(e.target.value)}
                        className="w-full px-3 py-2 bg-[#fcf9f8] border border-[#d9c1c4] rounded-xl text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#534245] uppercase block mb-1">Height / Size</label>
                      <input
                        type="text"
                        placeholder="24 Inches"
                        value={formHeight}
                        onChange={(e) => setFormHeight(e.target.value)}
                        className="w-full px-3 py-2 bg-[#fcf9f8] border border-[#d9c1c4] rounded-xl text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#534245] uppercase block mb-1">Badge / Tag</label>
                      <input
                        type="text"
                        placeholder="Bestseller"
                        value={formTag}
                        onChange={(e) => setFormTag(e.target.value)}
                        className="w-full px-3 py-2 bg-[#fcf9f8] border border-[#d9c1c4] rounded-xl text-xs"
                      />
                    </div>
                  </div>

                  {/* In Stock Toggle */}
                  <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-xl">
                    <input
                      type="checkbox"
                      id="stockCheck"
                      checked={formInStock}
                      onChange={(e) => setFormInStock(e.target.checked)}
                      className="w-4 h-4 text-[#7c1d24] rounded"
                    />
                    <label htmlFor="stockCheck" className="text-xs font-bold text-gray-700 cursor-pointer">
                      Mark Product as Currently In Stock (Available for WhatsApp / Store Order)
                    </label>
                  </div>
                </div>

                {/* Right 5 cols: Live Store Preview Card */}
                <div className="lg:col-span-5 bg-[#faf6f5] p-5 rounded-2xl border border-[#e5e2e1] space-y-4">
                  <div className="flex items-center justify-between border-b border-[#e5e2e1] pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#48061d] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Live Customer Preview
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">Storefront Card</span>
                  </div>

                  {/* Card Simulation */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e5e2e1] max-w-sm mx-auto">
                    <div className="relative aspect-square bg-white p-2.5 overflow-hidden flex items-center justify-center border-b border-[#e5e2e1]">
                      {formImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={formImage} alt="Preview" className="w-full h-full object-contain" />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 p-4 text-center">
                          <svg className="w-12 h-12 mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-xs">Image preview will render here</span>
                        </div>
                      )}

                      {formTag && (
                        <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#48061d] text-[#eec067] shadow">
                          {formTag}
                        </div>
                      )}

                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/90 text-gray-700 shadow backdrop-blur-xs">
                        {formCategory.split("(")[0].trim()}
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <h4 className="font-bold text-[#1b1c1c] text-sm line-clamp-1">
                        {formTitle || "Sample Product Title"}
                      </h4>
                      {formTamilTitle && (
                        <p className="text-xs text-[#7c1d24] line-clamp-1">{formTamilTitle}</p>
                      )}

                      <div className="flex items-baseline gap-2 pt-1">
                        <span className="text-lg font-extrabold text-[#7c1d24]">
                          ₹{formPrice ? Number(formPrice).toLocaleString("en-IN") : "0"}
                        </span>
                        {formOriginalPrice && Number(formOriginalPrice) > Number(formPrice) && (
                          <span className="text-xs text-gray-400 line-through">
                            ₹{Number(formOriginalPrice).toLocaleString("en-IN")}
                          </span>
                        )}
                        {formOriginalPrice && Number(formOriginalPrice) > Number(formPrice) && Number(formPrice) > 0 && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                            {Math.round(
                              ((Number(formOriginalPrice) - Number(formPrice)) / Number(formOriginalPrice)) * 100
                            )}
                            % OFF
                          </span>
                        )}
                      </div>

                      <p className="text-[11px] text-gray-500 line-clamp-2">
                        {formDescription || "Detailed description and sacred craftsmanship notes will appear here."}
                      </p>

                      <div className="pt-2 flex items-center justify-between text-[11px] border-t border-gray-100">
                        <span className="text-gray-500 font-semibold">{formMaterial}</span>
                        <span className={formInStock ? "text-emerald-700 font-bold" : "text-rose-700 font-bold"}>
                          {formInStock ? "● In Stock" : "○ Out of Stock"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="pt-4 border-t border-[#e5e2e1] flex items-center justify-end gap-3 sticky bottom-0 bg-white">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-bold transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSaving || uploadingImage}
                  className="px-6 py-2.5 rounded-xl bg-[#7c1d24] hover:bg-[#5e1319] text-white text-xs font-bold shadow-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSaving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Saving Product...</span>
                    </>
                  ) : (
                    <>
                      <span>{modalMode === "create" ? "Save & Publish Product" : "Update Product"}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* DELETE CONFIRMATION MODAL                            */}
      {/* ---------------------------------------------------- */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl border border-rose-200">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-base text-gray-900">Delete Product?</h4>
              <p className="text-xs text-gray-500 mt-1">
                Are you sure you want to permanently delete this item from the store database?
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-2 rounded-xl border border-gray-300 text-gray-700 text-xs font-bold hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteProduct(deleteConfirmId)}
                className="flex-1 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow cursor-pointer"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* CREATE CATEGORY MODAL                                */}
      {/* ---------------------------------------------------- */}
      {isNewCategoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl border border-[#d9c1c4]">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-[#48061d]">Add New Category</h4>
              <button
                onClick={() => setIsNewCategoryModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleCreateCategory} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#534245] uppercase block mb-1">
                  Category Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Copper Water Vessels &amp; Bottles"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#fcf9f8] border border-[#d9c1c4] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#7c1d24]"
                />
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsNewCategoryModalOpen(false)}
                  className="flex-1 py-2 rounded-xl border border-gray-300 text-gray-700 text-xs font-bold hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-[#7c1d24] hover:bg-[#5e1319] text-white text-xs font-bold shadow cursor-pointer"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
