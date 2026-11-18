document.addEventListener("DOMContentLoaded", () => {
    const store = window.DirectFarm || window.authService;
    if (!store) {
        console.error("DirectFarm store not loaded");
        return;
    }

    initMarketplace(store);
});

let currentProduceForDetail = null;

function initMarketplace(store) {
    
    setupAuthNav(store);

    updateCartBadge(store);
    setupCartModal(store);

    filterAndRenderProducts(store);

    setupFilterListeners(store);

    setupDirectMessageForm(store);

    setupCheckoutForm(store);
}

function setupAuthNav(store) {
    const user = store.getCurrentUser();
    const navGreeting = document.getElementById("nav-user-greeting");
    const userDisplayName = document.getElementById("user-display-name");
    const authButtons = document.getElementById("auth-nav-buttons");

    if (user) {
        if (navGreeting) navGreeting.style.display = "flex";
        if (userDisplayName) userDisplayName.textContent = user.name || "User";

        if (authButtons) {
            let farmerDashboardBtn = "";
            if (user.userType === "farmer") {
                farmerDashboardBtn = `<a href="farmer.html" class="btn primary-btn" style="padding: 6px 14px; font-size: 13px; text-decoration: none;"><i class="bi bi-speedometer2"></i> Farmer Dashboard</a>`;
            }

            authButtons.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px;">
                    ${farmerDashboardBtn}
                    <a href="#" class="logout-button" id="nav-logout-btn"><i class="bi bi-box-arrow-right"></i> Logout</a>
                </div>
            `;

            const logoutBtn = document.getElementById("nav-logout-btn");
            if (logoutBtn) {
                logoutBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    if (confirm("Are you sure you want to log out?")) {
                        store.logout();
                        window.location.reload();
                    }
                });
            }
        }
    } else {
        if (navGreeting) navGreeting.style.display = "none";
        if (authButtons) {
            authButtons.innerHTML = `
                <div style="display: flex; gap: 8px;">
                    <a href="login.html" class="btn secondary-btn" style="padding: 6px 14px; font-size: 13px; text-decoration: none;">Sign In</a>
                    <a href="register.html" class="btn primary-btn" style="padding: 6px 14px; font-size: 13px; text-decoration: none;">Register</a>
                </div>
            `;
        }
    }
}

function updateCartBadge(store) {
    const badge = document.getElementById("cart-badge");
    if (badge) {
        badge.textContent = store.getCartCount();
    }
}

function setupCartModal(store) {
    const navCartBtn = document.getElementById("nav-cart-btn");
    const proceedCheckoutBtn = document.getElementById("cart-proceed-checkout");

    if (navCartBtn) {
        navCartBtn.addEventListener("click", () => {
            renderCartModal(store);
            openModal("cart-modal");
        });
    }

    if (proceedCheckoutBtn) {
        proceedCheckoutBtn.addEventListener("click", () => {
            const cart = store.getCart();
            if (cart.length === 0) {
                showToast("Your cart is empty! Add fresh produce first.", "info");
                return;
            }
            closeModal("cart-modal");
            openCheckoutModal(store);
        });
    }
}

function renderCartModal(store) {
    const container = document.getElementById("cart-items-container");
    const totalAmountSpan = document.getElementById("cart-total-amount");
    const cart = store.getCart();

    if (!container) return;
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 30px;">Your cart is empty. Browse products below!</p>';
        if (totalAmountSpan) totalAmountSpan.textContent = "₹0.00";
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const p = item.product;
        const qty = item.quantity || 1;
        const subtotal = p.price * qty;
        total += subtotal;

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        const unit = p.unit || (p.category === "liquid" ? "litre" : "kg");

        cartItem.innerHTML = `
            <img src="${p.image || 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'}" alt="${p.name}">
            <div class="cart-item-details">
                <div class="cart-item-title">${p.name}</div>
                <div class="cart-item-farm"><i class="bi bi-geo-alt"></i> ${p.farm}</div>
                <div class="cart-item-price">₹${Number(p.price).toFixed(2)} / ${unit}</div>
            </div>
            <div class="cart-qty-ctrl">
                <button class="cart-qty-btn" onclick="modifyCartQty(${p.id}, ${qty - 1})">-</button>
                <span style="font-size: 14px; font-weight: 600; min-width: 20px; text-align: center;">${qty}</span>
                <button class="cart-qty-btn" onclick="modifyCartQty(${p.id}, ${qty + 1})">+</button>
            </div>
            <button class="cart-remove-btn" title="Remove produce" onclick="removeCartItem(${p.id})">
                <i class="bi bi-trash"></i>
            </button>
        `;
        container.appendChild(cartItem);
    });

    if (totalAmountSpan) {
        totalAmountSpan.textContent = `₹${total.toFixed(2)}`;
    }
}

function modifyCartQty(productId, newQty) {
    const store = window.DirectFarm || window.authService;
    store.updateCartQuantity(productId, newQty);
    updateCartBadge(store);
    renderCartModal(store);
}

function removeCartItem(productId) {
    const store = window.DirectFarm || window.authService;
    store.removeFromCart(productId);
    updateCartBadge(store);
    renderCartModal(store);
    showToast("Item removed from cart", "info");
}

function openCheckoutModal(store) {
    const user = store.getCurrentUser();
    const cartTotal = store.getCartTotal();

    const subtotalDisplay = document.getElementById("checkout-subtotal");
    if (subtotalDisplay) subtotalDisplay.textContent = `₹${cartTotal.toFixed(2)}`;

    if (user) {
        const nameInput = document.getElementById("checkout-name");
        const phoneInput = document.getElementById("checkout-phone");
        const addressInput = document.getElementById("checkout-address");

        if (nameInput && !nameInput.value) nameInput.value = user.name || "";
        if (phoneInput && !phoneInput.value) phoneInput.value = user.phone || "";
        if (addressInput && !addressInput.value) addressInput.value = user.address || "";
    }

    openModal("checkout-modal");
}

function setupCheckoutForm(store) {
    const checkoutForm = document.getElementById("checkout-form");
    if (!checkoutForm) return;

    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const cart = store.getCart();
        if (cart.length === 0) {
            showToast("Your cart is empty!", "error");
            return;
        }

        const name = document.getElementById("checkout-name").value;
        const phone = document.getElementById("checkout-phone").value;
        const address = document.getElementById("checkout-address").value;
        const paymentMethod = document.getElementById("checkout-payment").value;
        const notes = document.getElementById("checkout-notes").value;

        const orderItems = cart.map(item => ({
            id: item.product.id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            unit: item.product.unit || "kg",
            farm: item.product.farm,
            farmerId: item.product.farmerId || "farmer@directfarm.com",
            image: item.product.image
        }));

        const totalAmount = store.getCartTotal();

        const newOrder = store.createOrder({
            consumerName: name,
            consumerPhone: phone,
            deliveryAddress: address,
            paymentMethod: paymentMethod,
            notes: notes,
            items: orderItems,
            totalAmount: totalAmount
        });

        closeModal("checkout-modal");
        updateCartBadge(store);

        const successId = document.getElementById("success-order-id");
        const successTotal = document.getElementById("success-order-total");
        const successAddress = document.getElementById("success-order-address");

        if (successId) successId.textContent = `#${newOrder.id}`;
        if (successTotal) successTotal.textContent = `₹${totalAmount.toFixed(2)}`;
        if (successAddress) successAddress.textContent = address;

        openModal("order-success-modal");
        showToast("Order placed successfully with the farmer!", "success");

        filterAndRenderProducts(store);
    });
}

function setupFilterListeners(store) {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const categorySelect = document.getElementById("category-select");
    const priceSelect = document.getElementById("price-select");
    const sortSelect = document.getElementById("sort-select");

    const triggerFilter = () => filterAndRenderProducts(store);

    if (searchInput) {
        searchInput.addEventListener("input", triggerFilter);
        searchInput.addEventListener("keyup", (e) => {
            if (e.key === "Enter") triggerFilter();
        });
    }
    if (searchButton) searchButton.addEventListener("click", triggerFilter);
    if (categorySelect) categorySelect.addEventListener("change", triggerFilter);
    if (priceSelect) priceSelect.addEventListener("change", triggerFilter);
    if (sortSelect) sortSelect.addEventListener("change", triggerFilter);
}

function filterAndRenderProducts(store) {
    const productsContainer = document.getElementById("products");
    if (!productsContainer) return;

    const searchTerm = (document.getElementById("search-input")?.value || "").toLowerCase().trim();
    const categoryFilter = document.getElementById("category-select")?.value || "all";
    const priceFilter = document.getElementById("price-select")?.value || "all";
    const sortFilter = document.getElementById("sort-select")?.value || "default";

    const allProducts = store.getProducts();

    let filtered = allProducts.filter(p => {
        
        const matchesSearch = !searchTerm || 
            (p.name && p.name.toLowerCase().includes(searchTerm)) ||
            (p.farm && p.farm.toLowerCase().includes(searchTerm)) ||
            (p.category && p.category.toLowerCase().includes(searchTerm));

        const pCat = (p.category || "").toLowerCase();
        const matchesCategory = categoryFilter === "all" || pCat === categoryFilter.toLowerCase();

        let matchesPrice = true;
        const price = Number(p.price);
        if (priceFilter === "0-100") {
            matchesPrice = price <= 100;
        } else if (priceFilter === "100-300") {
            matchesPrice = price >= 100 && price <= 300;
        } else if (priceFilter === "300-500") {
            matchesPrice = price >= 300 && price <= 500;
        } else if (priceFilter === "500+") {
            matchesPrice = price > 500;
        }

        return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sortFilter === "price-asc") {
        filtered.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortFilter === "price-desc") {
        filtered.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sortFilter === "name-asc") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    productsContainer.innerHTML = "";

    if (filtered.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-products">
                <i class="bi bi-search" style="font-size: 40px; display: block; margin-bottom: 10px; color: var(--text-light);"></i>
                <p>No farm produce found matching your search criteria.</p>
                <button class="btn secondary-btn" style="margin-top: 15px;" onclick="resetFilters()">Reset All Filters</button>
            </div>
        `;
        return;
    }

    filtered.forEach(product => {
        productsContainer.appendChild(createMarketplaceCard(product, store));
    });
}

function resetFilters() {
    const searchInput = document.getElementById("search-input");
    const categorySelect = document.getElementById("category-select");
    const priceSelect = document.getElementById("price-select");
    const sortSelect = document.getElementById("sort-select");

    if (searchInput) searchInput.value = "";
    if (categorySelect) categorySelect.value = "all";
    if (priceSelect) priceSelect.value = "all";
    if (sortSelect) sortSelect.value = "default";

    const store = window.DirectFarm || window.authService;
    filterAndRenderProducts(store);
}

function createMarketplaceCard(product, store) {
    const card = document.createElement("div");
    card.className = "product-card";

    const unit = product.unit || (product.category === "liquid" ? "litre" : "kg");

    card.innerHTML = `
        <div class="card-img-wrap">
            <img src="${product.image || 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'}" alt="${product.name}" loading="lazy">
            <span class="category-badge">${product.category}</span>
            <span class="stock-tag">${product.amount || 0} ${unit} in stock</span>
        </div>
        <div class="card-content">
            <h3>${product.name}</h3>
            <div class="farm-link"><i class="bi bi-geo-alt"></i> ${product.farm || 'Direct Farm Partner'}</div>
            <div class="price-row">
                <div>
                    <span class="price">₹${Number(product.price).toFixed(2)}</span>
                    <span class="unit">/${unit}</span>
                </div>
                <span class="direct-tag">100% Direct</span>
            </div>
            <div class="card-actions">
                <button class="add-to-cart-btn" onclick="handleAddToCart(${product.id})">
                    <i class="bi bi-cart-plus"></i> Add
                </button>
                <button class="details-btn" onclick="openProductDetailsModal(${product.id})">
                    Details
                </button>
            </div>
        </div>
    `;

    return card;
}

function handleAddToCart(productId, quantity = 1) {
    const store = window.DirectFarm || window.authService;
    const product = store.getProductById(productId);
    if (!product) return;

    store.addToCart(productId, quantity);
    updateCartBadge(store);
    showToast(`Added ${quantity} ${product.unit || 'kg'} of "${product.name}" to cart!`, "success");
}

function openProductDetailsModal(productId) {
    const store = window.DirectFarm || window.authService;
    const product = store.getProductById(productId);
    if (!product) return;

    currentProduceForDetail = product;

    const titleEl = document.getElementById("modal-product-title");
    const bodyEl = document.getElementById("modal-product-body");

    if (titleEl) titleEl.textContent = product.name;
    const unit = product.unit || (product.category === "liquid" ? "litre" : "kg");

    if (bodyEl) {
        bodyEl.innerHTML = `
            <div style="display: flex; gap: 20px; margin-bottom: 20px; flex-wrap: wrap;">
                <img src="${product.image}" alt="${product.name}" style="width: 160px; height: 160px; object-fit: cover; border-radius: 8px;">
                <div style="flex: 1; font-size: 14px; line-height: 1.6;">
                    <p style="margin-bottom: 4px;"><strong>Category:</strong> <span style="text-transform: capitalize;">${product.category}</span></p>
                    <p style="margin-bottom: 4px;"><strong>Direct Price:</strong> <span style="color: var(--primary-color); font-weight: 700; font-size: 18px;">₹${Number(product.price).toFixed(2)}</span> / ${unit}</p>
                    <p style="margin-bottom: 4px;"><strong>Harvest Stock:</strong> ${product.amount} ${unit} available</p>
                    <p style="margin-bottom: 4px;"><strong>Farm:</strong> ${product.farm}</p>
                    <p style="margin-bottom: 4px;"><strong>Farmer:</strong> ${product.farmerName || 'Local Farmer'}</p>
                    <p style="margin-bottom: 4px;"><strong>Location:</strong> ${product.address}</p>
                </div>
            </div>

            <p style="background: #f8fafc; padding: 12px; border-radius: 6px; font-size: 14px; margin-bottom: 18px; line-height: 1.5;">
                <strong>About this harvest:</strong> ${product.description || 'Pure farm-fresh produce harvested directly for consumers.'}
            </p>

            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 12px; border-radius: 8px; margin-bottom: 20px;">
                <div style="font-weight: 600; color: #166534; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
                    <i class="bi bi-shield-check"></i> Direct Farmer Contact
                </div>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <a href="tel:${product.farmerPhone || '9876543210'}" class="btn" style="background: #166534; color: white; padding: 6px 14px; font-size: 13px; text-decoration: none;">
                        <i class="bi bi-telephone-fill"></i> Call Farmer (${product.farmerPhone || '+91 98765 43210'})
                    </a>
                    <button type="button" class="btn" style="background: white; color: #166534; border: 1px solid #166534; padding: 6px 14px; font-size: 13px;" onclick="openDirectMessageModal('${product.farmerId || 'farmer@directfarm.com'}', '${product.farm}')">
                        <i class="bi bi-chat-dots-fill"></i> Message Farmer
                    </button>
                </div>
            </div>

            <div style="display: flex; gap: 12px; align-items: center;">
                <div style="display: flex; align-items: center; border: 1px solid var(--border-color); border-radius: 6px; overflow: hidden;">
                    <button type="button" style="width: 34px; height: 38px; border: none; background: #f8fafc; cursor: pointer; font-weight: 700;" onclick="adjustModalQty(-1)">-</button>
                    <input type="number" id="modal-qty-input" value="1" min="1" max="${product.amount || 99}" style="width: 45px; height: 38px; border: none; text-align: center; font-weight: 600;">
                    <button type="button" style="width: 34px; height: 38px; border: none; background: #f8fafc; cursor: pointer; font-weight: 700;" onclick="adjustModalQty(1)">+</button>
                </div>
                <button type="button" class="btn-checkout" style="flex: 1;" onclick="addModalProduceToCart(${product.id})">
                    <i class="bi bi-cart-plus"></i> Add to Cart
                </button>
            </div>
        `;
    }

    openModal("product-details-modal");
}

function adjustModalQty(delta) {
    const input = document.getElementById("modal-qty-input");
    if (input) {
        let current = parseInt(input.value) || 1;
        current = Math.max(1, current + delta);
        input.value = current;
    }
}

function addModalProduceToCart(productId) {
    const input = document.getElementById("modal-qty-input");
    const qty = parseInt(input?.value) || 1;
    handleAddToCart(productId, qty);
    closeModal("product-details-modal");
}

function openDirectMessageModal(farmerId, farmName) {
    closeModal("product-details-modal");

    const store = window.DirectFarm || window.authService;
    const user = store.getCurrentUser();

    document.getElementById("msg-farmer-id").value = farmerId || "farmer@directfarm.com";
    document.getElementById("msg-farm-name").value = farmName || "Direct Farm Partner";
    document.getElementById("msg-to-farm").value = farmName || "Direct Farm Partner";

    if (user) {
        const nameInput = document.getElementById("msg-consumer-name");
        const phoneInput = document.getElementById("msg-consumer-phone");
        if (nameInput) nameInput.value = user.name || "";
        if (phoneInput) phoneInput.value = user.phone || "";
    }

    openModal("direct-message-modal");
}

function setupDirectMessageForm(store) {
    const form = document.getElementById("direct-message-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const farmerId = document.getElementById("msg-farmer-id").value;
        const farmName = document.getElementById("msg-farm-name").value;
        const fromName = document.getElementById("msg-consumer-name").value;
        const fromPhone = document.getElementById("msg-consumer-phone").value;
        const subject = document.getElementById("msg-subject").value;
        const message = document.getElementById("msg-content").value;

        store.sendMessage({
            farmerId,
            farmName,
            fromName,
            fromPhone,
            subject: subject || "Produce Inquiry",
            message
        });

        closeModal("direct-message-modal");
        form.reset();
        showToast("Your message has been delivered to the farmer's dashboard!", "success");
    });
}

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add("show");
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove("show");
}

window.onclick = (e) => {
    if (e.target.classList.contains("modal")) {
        e.target.classList.remove("show");
    }
};

function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    const iconMap = {
        success: "bi-check-circle-fill",
        error: "bi-exclamation-triangle-fill",
        info: "bi-info-circle-fill"
    };

    toast.innerHTML = `<i class="bi ${iconMap[type] || 'bi-info-circle-fill'}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(50px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
