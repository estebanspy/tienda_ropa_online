/**
 * THREAD — main.js
 * Interactividad básica: carrito lateral, modal de vista rápida,
 * chips de filtro, slider de precio.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------------------
     1. CARRITO LATERAL
     Abre/cierra el panel lateral del carrito con overlay
  ------------------------------------------------------- */
  const btnCart       = document.getElementById('btn-cart');
  const btnCloseCart  = document.getElementById('btn-close-cart');
  const cartSidebar   = document.getElementById('cart-sidebar');
  const cartOverlay   = document.getElementById('cart-overlay');

  function openCart() {
    cartSidebar.classList.add('is-open');
    cartOverlay.classList.add('is-visible');
    cartSidebar.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Evita scroll del body
  }

  function closeCart() {
    cartSidebar.classList.remove('is-open');
    cartOverlay.classList.remove('is-visible');
    cartSidebar.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (btnCart)      btnCart.addEventListener('click', openCart);
  if (btnCloseCart) btnCloseCart.addEventListener('click', closeCart);
  if (cartOverlay)  cartOverlay.addEventListener('click', closeCart);

  /* -------------------------------------------------------
     2. MODAL DE VISTA RÁPIDA
     Se abre al clicar "Vista rápida" en cualquier producto
  ------------------------------------------------------- */
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose   = document.getElementById('modal-close');
  const btnsOverlay  = document.querySelectorAll('.btn-overlay');

  function openModal() {
    modalOverlay.classList.add('is-open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('is-open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  btnsOverlay.forEach(btn => btn.addEventListener('click', openModal));
  if (modalClose)   modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Cerrar con tecla Escape (accesibilidad)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeCart();
    }
  });

  /* -------------------------------------------------------
     3. CHIPS DE FILTRO
     Toggle del chip activo
  ------------------------------------------------------- */
  const chips = document.querySelectorAll('.chip');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => {
        c.classList.remove('chip--active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('chip--active');
      chip.setAttribute('aria-pressed', 'true');
    });
  });

  /* -------------------------------------------------------
     4. SLIDER DE PRECIO
     Actualiza el valor mostrado al mover el rango
  ------------------------------------------------------- */
  const priceRange = document.getElementById('price-range');
  const priceValue = document.getElementById('price-value');

  if (priceRange && priceValue) {
    priceRange.addEventListener('input', () => {
      priceValue.textContent = `${priceRange.value} €`;
      priceRange.setAttribute('aria-label', `Precio máximo: ${priceRange.value}€`);
    });
  }

  /* -------------------------------------------------------
     5. BOTONES DE TALLA EN SIDEBAR
     Toggle de la talla activa
  ------------------------------------------------------- */
  const sizeBtns = document.querySelectorAll('.sidebar-left .size-btn');

  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('size-btn--active'));
      btn.classList.add('size-btn--active');
    });
  });

});