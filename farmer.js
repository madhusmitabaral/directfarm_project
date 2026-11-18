document.addEventListener("DOMContentLoaded", () => {
    
    if (typeof DirectFarm === "undefined" && typeof AuthService === "undefined") {
        console.error("DirectFarm store not loaded");
        return;
    }

    const store = window.DirectFarm || window.authService;
    const currentUser = store.getCurrentUser();

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    if (currentUser.userType !== "farmer") {
        alert("This dashboard is reserved for registered farmers. Redirecting to Marketplace.");
        window.location.href = "marketplace.html";
        return;
    }

    initFarmerDashboard(store, currentUser);
});

let currentActiveProduct = null;

function initFarmerDashboard(store, user) {
    
    populateFarmerProfile(user);

    setupTabNavigation();

    setupMenuToggle();

    setupLogout(store);

    renderDashboardMetrics(store, user);

    renderFarmerProducts(store, user);

    renderFarmerOrders(store, user);

    renderFarmerMessages(store, user);

    setupFormHandlers(store, user);
}

function populateFarmerProfile(user) {
    const sidebarName = document.getElementById("sidebar-farmer-name");
    const sidebarFarm = document.getElementById("sidebar-farm-name");
    const sidebarImg = document.getElementById("sidebar-farmer-img");
    const headerImg = document.getElementById("header-farmer-img");
    const welcomeHeading = document.getElementById("welcome-heading");

    if (sidebarName) sidebarName.textContent = user.name || "Farmer";
    if (sidebarFarm) sidebarFarm.textContent = user.farmName || "Direct Farm Partner";
    if (sidebarImg && user.profileImage) sidebarImg.src = user.profileImage;
    if (headerImg && user.profileImage) headerImg.src = user.profileImage;
    if (welcomeHeading) welcomeHeading.textContent = `Welcome, ${user.name}!`;

    const farmNameInput = document.getElementById("farm-name");
    const farmAddressInput = document.getElementById("farm-address");
    if (farmNameInput) farmNameInput.value = user.farmName || "";
    if (farmAddressInput) farmAddressInput.value = user.address || "";

    const profileName = document.getElementById("profile-name");
    const profileFarmName = document.getElementById("profile-farm-name");
    const profilePhone = document.getElementById("profile-phone");
    const profileEmail = document.getElementById("profile-email");
    const profileAddress = document.getElementById("profile-address");
    const profileBio = document.getElementById("profile-bio");
    const profileImgInput = document.getElementById("profile-image-input");

    if (profileName) profileName.value = user.name || "";
    if (profileFarmName) profileFarmName.value = user.farmName || "";
    if (profilePhone) profilePhone.value = user.phone || "";
    if (profileEmail) profileEmail.value = user.email || "";
    if (profileAddress) profileAddress.value = user.address || "";
    if (profileBio) profileBio.value = user.bio || "";
    if (profileImgInput) profileImgInput.value = user.profileImage || "";
}

function setupTabNavigation() {
    const navItems = document.querySelectorAll(".sidebar-nav .nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetTab = item.getAttribute("data-tab");
            switchTab(targetTab);
        });
    });

    const headerProfileMenu = document.getElementById("header-profile-menu");
    if (headerProfileMenu) {
        headerProfileMenu.addEventListener("click", () => switchTab("settings"));
    }
}

function switchTab(tabName) {
    
    document.querySelectorAll(".sidebar-nav .nav-item").forEach(item => {
        if (item.getAttribute("data-tab") === tabName) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    document.querySelectorAll(".tab-pane").forEach(pane => {
        pane.classList.remove("active");
    });

    const targetPane = document.getElementById(`tab-${tabName}`);
    if (targetPane) {
        targetPane.classList.add("active");
    }

    const pageTitle = document.getElementById("page-title");
    if (pageTitle) {
        const titles = {
            dashboard: "Farmer Dashboard",
            products: "My Farm Products",
            orders: "Consumer Purchase Orders",
            analytics: "Direct Impact & Fair Profit",
            messages: "Direct Consumer Messages",
            settings: "Farm Profile Settings"
        };
        pageTitle.textContent = titles[tabName] || "Farmer Dashboard";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupMenuToggle() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("collapsed");
        });
    }
}

function setupLogout(store) {
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (confirm("Are you sure you want to log out?")) {
                store.logout();
                window.location.href = "login.html";
            }
        });
    }
}

function renderDashboardMetrics(store, user) {
    const orders = store.getFarmerOrders(user.email);
    const products = store.getFarmerProducts(user.email);

    const totalRevenue = orders
        .filter(o => o.status !== "Cancelled")
        .reduce((sum, o) => sum + (o.totalAmount || 0), 0);

    const totalOrdersCount = orders.length;
    const activeProductsCount = products.length;
    const middlemanSaved = Math.round(totalRevenue * 0.35); 

    const kpiRevenue = document.getElementById("kpi-total-revenue");
    const kpiOrders = document.getElementById("kpi-total-orders");
    const kpiProducts = document.getElementById("kpi-active-products");
    const kpiSaved = document.getElementById("kpi-middleman-saved");

    if (kpiRevenue) kpiRevenue.textContent = `₹${totalRevenue.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;
    if (kpiOrders) kpiOrders.textContent = totalOrdersCount;
    if (kpiProducts) kpiProducts.textContent = activeProductsCount;
    if (kpiSaved) kpiSaved.textContent = `₹${middlemanSaved.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

    const analyticsSales = document.getElementById("analytics-total-sales");
    const analyticsSaved = document.getElementById("analytics-total-saved");
    if (analyticsSales) analyticsSales.textContent = `₹${totalRevenue.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;
    if (analyticsSaved) analyticsSaved.textContent = `₹${middlemanSaved.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;
}

function renderFarmerProducts(store, user) {
    const products = store.getFarmerProducts(user.email);

    const recentContainer = document.getElementById("farmer-recent-products");
    const allContainer = document.getElementById("farmer-all-products");

    if (recentContainer) {
        recentContainer.innerHTML = "";
        const recent = products.slice(0, 4);
        if (recent.length === 0) {
            recentContainer.innerHTML = '<p style="grid-column: 1/-1; color: var(--text-light); text-align: center; padding: 20px;">No produce listed yet. Add your first harvest above!</p>';
        } else {
            recent.forEach(p => {
                recentContainer.appendChild(createProductCard(p));
            });
        }
    }

    if (allContainer) {
        allContainer.innerHTML = "";
        if (products.length === 0) {
            allContainer.innerHTML = '<p style="grid-column: 1/-1; color: var(--text-light); text-align: center; padding: 40px;">No products found. Click "+ Add New Produce" to get started!</p>';
        } else {
            products.forEach(p => {
                allContainer.appendChild(createProductCard(p));
            });
        }
    }
}

function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";

    const unit = product.unit || (product.category === "liquid" ? "litre" : "kg");

    card.innerHTML = `
        <div class="product-card-img-container">
            <img src="${product.image || 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'}" alt="${product.name}">
            <span class="product-card-badge">${product.category}</span>
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="farm-tag"><i class="bi bi-geo-alt"></i> ${product.farm || 'Direct Farm'}</p>
            <div class="price-row">
                <span class="price">₹${Number(product.price).toFixed(2)} <span style="font-size: 13px; font-weight: normal; color: #64748b;">/${unit}</span></span>
                <span class="stock">Stock: <strong>${product.amount || 0}</strong> ${unit}</span>
            </div>
            <div class="product-actions">
                <button class="btn-card-view" onclick="viewProductDetails(${product.id})"><i class="bi bi-eye"></i> View</button>
                <button class="btn-card-edit" onclick="openEditProductModal(${product.id})"><i class="bi bi-pencil"></i> Edit</button>
                <button class="btn-card-delete" onclick="handleDeleteProduct(${product.id})"><i class="bi bi-trash"></i></button>
            </div>
        </div>
    `;

    return card;
}

function renderFarmerOrders(store, user) {
    const orders = store.getFarmerOrders(user.email);

    const recentTbody = document.getElementById("dashboard-recent-orders-tbody");
    if (recentTbody) {
        recentTbody.innerHTML = "";
        const recentOrders = orders.slice(0, 4);

        if (recentOrders.length === 0) {
            recentTbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: var(--text-light); padding: 20px;">No direct consumer orders yet.</td></tr>';
        } else {
            recentOrders.forEach(order => {
                const tr = document.createElement("tr");
                const itemsSummary = (order.items || []).map(i => `${i.name} (×${i.quantity || 1})`).join(", ");
                const statusClass = `status-${(order.status || 'pending').toLowerCase()}`;

                tr.innerHTML = `
                    <td><strong>#${order.id}</strong></td>
                    <td>${order.consumerName || 'Consumer'}</td>
                    <td style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${itemsSummary || 'Produce'}</td>
                    <td><strong>₹${Number(order.totalAmount).toFixed(2)}</strong></td>
                    <td><span class="status-pill ${statusClass}">${order.status}</span></td>
                    <td>
                        <button class="btn secondary-btn" style="padding: 4px 10px; font-size: 12px;" onclick="switchTab('orders')">Manage</button>
                    </td>
                `;
                recentTbody.appendChild(tr);
            });
        }
    }

    const allTbody = document.getElementById("farmer-orders-tbody");
    if (allTbody) {
        allTbody.innerHTML = "";

        if (orders.length === 0) {
            allTbody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: var(--text-light); padding: 40px;">No consumer purchase orders yet. New consumer orders will show up here in real time!</td></tr>';
        } else {
            orders.forEach(order => {
                const tr = document.createElement("tr");
                const orderDate = new Date(order.date).toLocaleDateString("en-IN", {
                    month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
                });
                const itemsHtml = (order.items || []).map(i => `<div>• ${i.name} × ${i.quantity || 1} ${i.unit || 'kg'} (₹${(i.price * (i.quantity || 1)).toFixed(2)})</div>`).join("");

                tr.innerHTML = `
                    <td><strong>#${order.id}</strong></td>
                    <td>${orderDate}</td>
                    <td>
                        <strong>${order.consumerName || 'Consumer'}</strong><br>
                        <span style="font-size: 12px; color: var(--text-light);"><i class="bi bi-telephone"></i> ${order.consumerPhone || 'N/A'}</span><br>
                        <span style="font-size: 12px; color: var(--text-light);"><i class="bi bi-geo-alt"></i> ${order.deliveryAddress || 'Address'}</span>
                    </td>
                    <td style="font-size: 13px;">${itemsHtml}</td>
                    <td><strong style="color: var(--primary-color); font-size: 15px;">₹${Number(order.totalAmount).toFixed(2)}</strong><br><span style="font-size: 11px; color: var(--text-light);">${order.paymentMethod || 'Direct Pay'}</span></td>
                    <td><span style="color: #16a34a; font-weight: 600;">₹${order.middlemanFeeSaved || Math.round(order.totalAmount * 0.35)}</span></td>
                    <td>
                        <select class="status-select-inline" onchange="updateOrderStatus('${order.id}', this.value)">
                            <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>Pending</option>
                            <option value="Confirmed" ${order.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                            <option value="Shipped" ${order.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                            <option value="Delivered" ${order.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                            <option value="Cancelled" ${order.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                        </select>
                    </td>
                `;
                allTbody.appendChild(tr);
            });
        }
    }
}

function updateOrderStatus(orderId, newStatus) {
    const store = window.DirectFarm || window.authService;
    const user = store.getCurrentUser();

    store.updateOrderStatus(orderId, newStatus);
    showToast(`Order #${orderId} marked as ${newStatus}`, "success");

    renderDashboardMetrics(store, user);
    renderFarmerOrders(store, user);
}

function renderFarmerMessages(store, user) {
    const messages = store.getMessages(user.email);
    const container = document.getElementById("farmer-messages-list");
    if (!container) return;

    container.innerHTML = "";

    if (messages.length === 0) {
        container.innerHTML = '<p style="color: var(--text-light); text-align: center; padding: 40px;">No direct inquiries from consumers at this moment.</p>';
        return;
    }

    messages.forEach(msg => {
        const card = document.createElement("div");
        card.className = "message-card";
        const dateStr = new Date(msg.date).toLocaleDateString("en-IN", {
            month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit"
        });

        const replyHtml = msg.reply 
            ? `<div class="message-reply-box"><strong>Your Reply:</strong> ${msg.reply}</div>`
            : `
                <form class="reply-form" onsubmit="handleReplyMessage(event, '${msg.id}')">
                    <input type="text" placeholder="Type a direct response to consumer..." required>
                    <button type="submit" class="btn primary-btn" style="padding: 6px 14px; font-size: 13px;"><i class="bi bi-send"></i> Reply</button>
                </form>
            `;

        card.innerHTML = `
            <div class="message-header">
                <div>
                    <span class="message-from"><i class="bi bi-person-circle"></i> ${msg.fromName || 'Consumer'}</span>
                    <span style="font-size: 12px; color: var(--text-light); margin-left: 8px;">(${msg.fromPhone || msg.fromEmail})</span>
                </div>
                <span class="message-date">${dateStr}</span>
            </div>
            <div style="font-weight: 600; margin-bottom: 4px; font-size: 14px;">Subject: ${msg.subject || 'Produce Inquiry'}</div>
            <div class="message-body">${msg.message}</div>
            ${replyHtml}
        `;

        container.appendChild(card);
    });
}

function handleReplyMessage(e, msgId) {
    e.preventDefault();
    const input = e.target.querySelector("input");
    const replyText = input.value.trim();
    if (!replyText) return;

    const store = window.DirectFarm || window.authService;
    const user = store.getCurrentUser();

    store.replyMessage(msgId, replyText);
    showToast("Reply sent directly to consumer!", "success");
    renderFarmerMessages(store, user);
}

function setupFormHandlers(store, user) {
    
    const productForm = document.getElementById("product-form");
    if (productForm) {
        productForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("product-name").value;
            const category = document.getElementById("product-type").value;
            const price = parseFloat(document.getElementById("product-price").value);
            const amount = parseInt(document.getElementById("product-amount").value);
            const unit = document.getElementById("product-unit").value;
            const farm = document.getElementById("farm-name").value;
            const address = document.getElementById("farm-address").value;
            const description = document.getElementById("product-description").value;
            const imageUrl = document.getElementById("product-image-url").value;
            const imageFileInput = document.getElementById("product-image-file");

            const saveNewProduct = (imageSrc) => {
                store.addProduct({
                    name,
                    category,
                    price,
                    amount,
                    unit,
                    farm,
                    address,
                    description,
                    image: imageSrc || "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                });

                showToast(`"${name}" has been published to the Marketplace!`, "success");
                productForm.reset();

                document.getElementById("farm-name").value = user.farmName || "";
                document.getElementById("farm-address").value = user.address || "";

                renderDashboardMetrics(store, user);
                renderFarmerProducts(store, user);
            };

            if (imageFileInput && imageFileInput.files && imageFileInput.files[0]) {
                const reader = new FileReader();
                reader.onload = (event) => saveNewProduct(event.target.result);
                reader.readAsDataURL(imageFileInput.files[0]);
            } else {
                saveNewProduct(imageUrl);
            }
        });
    }

    const editForm = document.getElementById("edit-product-form");
    if (editForm) {
        editForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const id = document.getElementById("edit-product-id").value;
            const name = document.getElementById("edit-name").value;
            const category = document.getElementById("edit-category").value;
            const price = parseFloat(document.getElementById("edit-price").value);
            const amount = parseInt(document.getElementById("edit-amount").value);
            const unit = document.getElementById("edit-unit").value;
            const description = document.getElementById("edit-description").value;
            const image = document.getElementById("edit-image").value;

            store.updateProduct(id, {
                name,
                category,
                price,
                amount,
                unit,
                description,
                ...(image ? { image } : {})
            });

            closeModal("edit-product-modal");
            showToast(`Produce "${name}" updated successfully!`, "success");

            renderDashboardMetrics(store, user);
            renderFarmerProducts(store, user);
        });
    }

    const profileForm = document.getElementById("farm-profile-form");
    if (profileForm) {
        profileForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("profile-name").value;
            const farmName = document.getElementById("profile-farm-name").value;
            const phone = document.getElementById("profile-phone").value;
            const address = document.getElementById("profile-address").value;
            const bio = document.getElementById("profile-bio").value;
            const profileImage = document.getElementById("profile-image-input").value;

            const updatedUser = store.updateCurrentUser({
                name,
                farmName,
                phone,
                address,
                bio,
                ...(profileImage ? { profileImage } : {})
            });

            showToast("Farm Profile updated successfully!", "success");
            populateFarmerProfile(updatedUser);
            renderDashboardMetrics(store, updatedUser);
        });
    }
}

function viewProductDetails(productId) {
    const store = window.DirectFarm || window.authService;
    const product = store.getProductById(productId);
    if (!product) return;

    currentActiveProduct = product;

    const modalName = document.getElementById("modal-product-name");
    const modalDetails = document.getElementById("modal-product-details");

    modalName.textContent = product.name;
    const unit = product.unit || (product.category === "liquid" ? "litre" : "kg");

    modalDetails.innerHTML = `
        <div style="display: flex; gap: 20px; margin-bottom: 15px; flex-wrap: wrap;">
            <img src="${product.image}" alt="${product.name}" style="width: 140px; height: 140px; object-fit: cover; border-radius: 8px;">
            <div style="flex: 1; font-size: 14px; line-height: 1.6;">
                <p><strong>Category:</strong> <span style="text-transform: capitalize;">${product.category}</span></p>
                <p><strong>Direct Price:</strong> <span style="color: var(--primary-color); font-weight: 700; font-size: 16px;">₹${Number(product.price).toFixed(2)}</span> / ${unit}</p>
                <p><strong>Stock Available:</strong> ${product.amount} ${unit}</p>
                <p><strong>Farm Name:</strong> ${product.farm}</p>
                <p><strong>Location:</strong> ${product.address}</p>
                <p><strong>Date Added:</strong> ${new Date(product.date).toLocaleDateString()}</p>
            </div>
        </div>
        <p style="background: #f8fafc; padding: 12px; border-radius: 6px; font-size: 14px;"><strong>Description:</strong> ${product.description || 'No description provided.'}</p>
    `;

    document.getElementById("modal-edit-btn").onclick = () => {
        closeModal("product-modal");
        openEditProductModal(product.id);
    };

    document.getElementById("modal-delete-btn").onclick = () => {
        closeModal("product-modal");
        handleDeleteProduct(product.id);
    };

    openModal("product-modal");
}

function openEditProductModal(productId) {
    const store = window.DirectFarm || window.authService;
    const product = store.getProductById(productId);
    if (!product) return;

    document.getElementById("edit-product-id").value = product.id;
    document.getElementById("edit-name").value = product.name;
    document.getElementById("edit-category").value = product.category || "vegetables";
    document.getElementById("edit-price").value = product.price;
    document.getElementById("edit-amount").value = product.amount;
    document.getElementById("edit-unit").value = product.unit || (product.category === "liquid" ? "litre" : "kg");
    document.getElementById("edit-description").value = product.description || "";
    document.getElementById("edit-image").value = product.image || "";

    openModal("edit-product-modal");
}

function handleDeleteProduct(productId) {
    const store = window.DirectFarm || window.authService;
    const user = store.getCurrentUser();
    const product = store.getProductById(productId);

    if (!product) return;

    if (confirm(`Are you sure you want to remove "${product.name}" from your listings?`)) {
        store.deleteProduct(productId);
        showToast(`Produce "${product.name}" removed from Marketplace.`, "info");

        renderDashboardMetrics(store, user);
        renderFarmerProducts(store, user);
    }
}

function openAddProductModal() {
    switchTab("dashboard");
    const addSection = document.querySelector(".add-product-section");
    if (addSection) {
        addSection.scrollIntoView({ behavior: "smooth" });
        const nameInput = document.getElementById("product-name");
        if (nameInput) nameInput.focus();
    }
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("show");
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("show");
    }
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
