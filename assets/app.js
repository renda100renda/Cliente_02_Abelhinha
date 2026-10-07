document.getElementById("wizardMount").innerHTML=`
        <form id="bookingForm" onsubmit="event.preventDefault(); submitBooking();"><!-- Etapa 1: Tipo do pet -->
          <div class="step-box">
            <span class="step-label" id="labelPetType">Etapa 1 — Tipo do pet:</span>
            <div class="chips-group" role="radiogroup" aria-labelledby="labelPetType">
              <button type="button" class="chip-btn" role="radio" aria-checked="true" aria-pressed="true" data-type="pet-type" data-value="Cachorro">🐶 Cachorro</button>
              <button type="button" class="chip-btn" role="radio" aria-checked="false" aria-pressed="false" data-type="pet-type" data-value="Gato">🐱 Gato</button>
              <button type="button" class="chip-btn" role="radio" aria-checked="false" aria-pressed="false" data-type="pet-type" data-value="Outro">🐾 Outro</button>
            </div>
          </div>
            <!-- Etapa 2: Serviço desejado (múltipla seleção) -->
          <div class="step-box">
            <span class="step-label" id="labelServices">Etapa 2 — Serviço desejado:</span>
            <span class="step-helper">pode escolher mais de um — ex.: banho + tosa higiênica</span>
            <div class="chips-group" role="group" aria-labelledby="labelServices">
              <button type="button" class="chip-btn" aria-pressed="true" data-type="service" data-value="Banho &amp; Tosa">Banho &amp; Tosa</button>
              <button type="button" class="chip-btn" aria-pressed="false" data-type="service" data-value="Somente Banho">Somente Banho</button>
              <button type="button" class="chip-btn" aria-pressed="false" data-type="service" data-value="Tosa Higiênica">Tosa Higiênica</button>
              <button type="button" class="chip-btn" aria-pressed="false" data-type="service" data-value="Hidratação">Hidratação</button>
              <button type="button" class="chip-btn" aria-pressed="false" data-type="service" data-value="Outro/Personalizado" id="btnCustomService">Outro / Personalizado</button>
            </div>
            <div class="custom-input-box" id="customServiceWrap">
              <label for="customServiceInput" class="step-helper" style="margin-top: 0.5rem; display: block;">Descreva o serviço personalizado:</label>
              <input type="text" id="customServiceInput" placeholder="Ex.: Banho com corte de unhas e hidratação especial">
            </div>
          </div>
            <!-- Etapa 3: Porte do pet -->
          <div class="step-box">
            <span class="step-label" id="labelSize">Etapa 3 — Porte do pet:</span>
            <div class="chips-group" role="radiogroup" aria-labelledby="labelSize">
              <button type="button" class="chip-btn" role="radio" aria-checked="false" aria-pressed="false" data-type="pet-size" data-value="Pequeno">Pequeno (até 10kg)</button>
              <button type="button" class="chip-btn" role="radio" aria-checked="false" aria-pressed="false" data-type="pet-size" data-value="Médio">Médio (10kg a 25kg)</button>
              <button type="button" class="chip-btn" role="radio" aria-checked="false" aria-pressed="false" data-type="pet-size" data-value="Grande">Grande (mais de 25kg)</button>
            </div>
          </div>
            <!-- Etapa 4: Preferência de dia e período -->
          <div class="step-box">
            <span class="step-label">Etapa 4 — Preferência de data e horário:</span>
            <div class="booking-grid-2col">
              <div>
                <span class="step-helper">Dia da semana preferido:</span>
                <div class="chips-group" role="radiogroup" aria-label="Dia da semana preferido">
                  <button type="button" class="chip-btn" role="radio" aria-checked="true" aria-pressed="true" data-type="pref-day" data-value="Terça a Sexta">Terça a Sexta</button>
                  <button type="button" class="chip-btn" role="radio" aria-checked="false" aria-pressed="false" data-type="pref-day" data-value="Sábado">Sábado</button>
                </div>
              </div>
              <div>
                <span class="step-helper">Período preferido:</span>
                <div class="chips-group" role="radiogroup" aria-label="Período preferido">
                  <button type="button" class="chip-btn" role="radio" aria-checked="true" aria-pressed="true" data-type="pref-period" data-value="Manhã">Manhã</button>
                  <button type="button" class="chip-btn" role="radio" aria-checked="false" aria-pressed="false" data-type="pref-period" data-value="Tarde">Tarde</button>
                </div>
              </div>
            </div>
          </div>
            <!-- Pré-visualização da mensagem -->
          <div class="booking-summary-preview" id="bookingPreviewBox" aria-live="polite">
            <strong>Prévia da mensagem:</strong>
            <br>
            <span id="previewMessage">Olá! Vim pelo site do Abelhinha Pet Shop e gostaria de agendar um atendimento. • Tipo: Cachorro • Serviço: Banho &amp; Tosa • Porte: (selecione) • Preferência: Terça a Sexta pela manhã</span>
          </div>
            <!-- Botão de Ação -->
          <button type="button" class="btn-send-wa" id="btnSubmitBooking" disabled="" aria-disabled="true" onclick="submitBooking()">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1.01 2.55.12.17 1.74 2.66 4.21 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"></path>
            </svg>
              Enviar pelo WhatsApp
          </button>
          <div class="booking-validation-hint" id="validationNotice">Selecione o serviço e o porte para continuar</div>
        </form>
      `;

document.getElementById("faqMount").innerHTML=`<!-- FAQ 1 -->
        <details class="faq-item">
          <summary class="faq-trigger">
            <span>Onde fica o Abelhinha?</span>
            <svg class="faq-trigger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div class="faq-content">R. Luís Carlos Ventura, 54 — Vila Sônia, São Paulo/SP (CEP 05628-020).</div>
        </details>
          <!-- FAQ 2 -->
        <details class="faq-item">
          <summary class="faq-trigger">
            <span>Quais serviços vocês oferecem?</span>
            <svg class="faq-trigger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div class="faq-content">Banho &amp; Tosa com atendimento individualizado e loja de rações, petiscos e acessórios.</div>
        </details>
          <!-- FAQ 3 -->
        <details class="faq-item">
          <summary class="faq-trigger">
            <span>Meu cão é medroso ou bravo, vocês aceitam?</span>
            <svg class="faq-trigger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div class="faq-content">Sim! Somos especializados em pets difíceis — cada horário é dedicado a um único cão, sem gaiolas e com muita paciência.</div>
        </details>
          <!-- FAQ 4 -->
        <details class="faq-item">
          <summary class="faq-trigger">
            <span>Como agendo?</span>
            <svg class="faq-trigger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div class="faq-content">Pelo botão de agendamento do site, que abre o WhatsApp (11) 98352-3034 com os dados já preenchidos.</div>
        </details>
          <!-- FAQ 5 -->
        <details class="faq-item">
          <summary class="faq-trigger">
            <span>Qual o horário?</span>
            <svg class="faq-trigger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div class="faq-content">Terça a Sexta 09h–17h, Sábado 09h–15h, domingo e segunda fechado.</div>
        </details>
          <!-- FAQ 6 -->
        <details class="faq-item">
          <summary class="faq-trigger">
            <span>Quais formas de pagamento?</span>
            <svg class="faq-trigger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div class="faq-content">Cartão de crédito, débito e aproximação (NFC).</div>
        </details>
      `;

// As 12 avaliações reais fornecidas, rigorosamente nessa ordem
    const reviewsData = [
      {
        name: "Andréia Oliveira",
        text: "Eu super indico o Pet Shop Abelhinha! Meu Bobynho foi muito bem recebido e atendido, afinal de contas o cliente é ele e não eu... Eu vejo amor e carinho no cuidado com cada pet. Muito obrigada Tais e equipe por toda atenção."
      },
      {
        name: "STARdOTE",
        text: "Atendimento impecável! Taís é extremamente atenciosa, rápida e cuidadosa — dá pra sentir que ama o que faz. O Pet Shop Abelhinha é sinônimo de confiança, carinho e profissionalismo."
      },
      {
        name: "Aline Carvalho",
        text: "Meu cachorro Aladim é sempre bem tratado quando utilizamos o pet shop e retorna bem cheiroso."
      },
      {
        name: "Rafael Ribeiro Silva",
        text: "Lugar muito bem montado, com excelente atendimento e qualidade."
      },
      {
        name: "Livia Gimenes",
        text: "Atendimento individualizado, um cão por vez, deixo minha cadelinha lá sem medo e volto pra buscar. Ela fica solta. Usam produtos de qualidade e muito cheirosos que não dão alergia. Taís é incrível e atenciosa."
      },
      {
        name: "Alyoscha Stepper",
        text: "Meu dálmata sempre fica ansioso para ir ao pet shop. Ele sempre fica com um cheiro maravilhoso depois do banho e tosa."
      },
      {
        name: "Marcela Spencer",
        text: "O Abelhinha é um lugar de total confiança! Meus pets se sentem super à vontade, livres, sem qualquer sinal de estresse ou trauma. Receberam muito carinho, massagens, e o banho e a tosa higiênica são sempre impecáveis."
      },
      {
        name: "Fernanda Turolla",
        text: "Levei meus 3 pets lá e fiquei apaixonada, pelo amor, carinho e dedicação que eles têm pelos pets. Ambiente limpo, profissionais fantásticos e eles não fazem sobre demanda, cada horário tem um pet, não ficam presos em gaiolas."
      },
      {
        name: "Felipe Pastori",
        text: "A Taís é uma pessoa maravilhosa. É o lugar preferido disparado do meu cachorro até hoje. O lugar é muito agradável, convidativo e bem decorado; pelas bandanas e enfeites fashions e carinhosos que o deixam ainda mais vaidoso."
      },
      {
        name: "Andressa Duarte",
        text: "Sou mamãe de um cachorro extremamente bravo, e não conseguia achar nenhum Pet para cuidar dele na região da Vila Sônia! Até encontrar vocês, seu dog lá é tratado com muito amor, mesmo com meu cachorro super agressivo elas conquistaram ele e a mim."
      },
      {
        name: "Daniel Rangel",
        text: "Melhor Banho da região. Excelente recepção e tratamento com meus cachorros. Os animais ficam em um local acolhedor e são muito bem tratados."
      },
      {
        name: "Ivone Batista de Freitas",
        text: "Taís cuida do meu bebê Woody como se fosse o único, super carinhosa, capricha no banho, tosa higiênica, hidratação, me entrega todo cheiroso e super hidratado! Recomendo de olhos fechados!"
      }
    ];
    // Estado do agendamento
    const bookingState = {
      petType: "Cachorro",
      services: ["Banho & Tosa"],
      customServiceText: "",
      petSize: null, // Pequeno, Médio, Grande
      prefDay: "Terça a Sexta",
      prefPeriod: "Manhã"
    };
    document.addEventListener("DOMContentLoaded", function () {
      // Ano no rodapé
      document.getElementById("currentYear").textContent = new Date().getFullYear();
      // Renderizar carrossel de avaliações
      initReviewsCarousel();
      // Configurar eventos do formulário de agendamento
      setupBookingLogic();
      // Efeito de rolagem na navbar e botão de voltar ao topo
      setupScrollEffects();
    });
    // Inicialização do carrossel
    let currentSlide = 0;
    let autoPlayTimer = null;
    function initReviewsCarousel() {
      const track = document.getElementById("reviewsTrack");
      const dotsContainer = document.getElementById("carouselDots");
      const starSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="#F6B81D" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
      const starsHtml = starSvg.repeat(5);
      reviewsData.forEach((rev, idx) => {
        // Criar Slide
        const slide = document.createElement("div");
        slide.className = "review-slide";
        slide.setAttribute("role", "group");
        slide.setAttribute("aria-roledescription", "slide");
        slide.setAttribute("aria-label", `${idx + 1} de ${reviewsData.length}`);
        slide.innerHTML = `
          <div class="review-bubble">
            <div>
              <div class="review-stars" aria-label="Avaliação 5 estrelas">${starsHtml}</div>
              <p class="review-text">“${escapeHtml(rev.text)}”</p>
            </div>
            <div class="review-footer">
              <span class="review-author">${escapeHtml(rev.name)}</span>
              <span class="review-source">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#EA4335" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Fonte: Google Maps
              </span>
            </div>
          </div>
        `;
        track.appendChild(slide);
        // Criar Dot
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = `carousel-dot ${idx === 0 ? "active" : ""}`;
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", `Ir para avaliação de ${rev.name}`);
        dot.setAttribute("aria-selected", idx === 0 ? "true" : "false");
        dot.addEventListener("click", () => goToSlide(idx));
        dotsContainer.appendChild(dot);
      });
      document.getElementById("prevReviewBtn").addEventListener("click", () => {
        prevSlide();
        resetAutoPlay();
      });
      document.getElementById("nextReviewBtn").addEventListener("click", () => {
        nextSlide();
        resetAutoPlay();
      });
      // Pausa ao passar mouse / focar
      const carouselEl = document.getElementById("reviewsCarousel");
      carouselEl.addEventListener("mouseenter", stopAutoPlay);
      carouselEl.addEventListener("mouseleave", startAutoPlay);
      carouselEl.addEventListener("focusin", stopAutoPlay);
      carouselEl.addEventListener("focusout", startAutoPlay);
      startAutoPlay();
    }
    function goToSlide(index) {
      currentSlide = (index + reviewsData.length) % reviewsData.length;
      const track = document.getElementById("reviewsTrack");
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      const dots = document.querySelectorAll(".carousel-dot");
      dots.forEach((dot, idx) => {
        const isActive = idx === currentSlide;
        dot.classList.toggle("active", isActive);
        dot.setAttribute("aria-selected", isActive ? "true" : "false");
      });
    }
    function nextSlide() {
      goToSlide(currentSlide + 1);
    }
    function prevSlide() {
      goToSlide(currentSlide - 1);
    }
    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(nextSlide, 5500);
    }
    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }
    function resetAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }
    // Configuração dos Chips e Agendamento
    function setupBookingLogic() {
      // 1. Tipo do Pet (Single Choice)
      setupSingleChoiceGroup('pet-type', (val) => {
        bookingState.petType = val;
        updateBookingUI();
      });
      // 2. Serviço Desejado (Multi-choice)
      const serviceButtons = document.querySelectorAll('button[data-type="service"]');
      const customWrap = document.getElementById("customServiceWrap");
      const customInput = document.getElementById("customServiceInput");
      serviceButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const val = btn.dataset.value;
          const isSelected = btn.getAttribute("aria-pressed") === "true";
          const willSelect = !isSelected;
          btn.setAttribute("aria-pressed", willSelect ? "true" : "false");
          if (val === "Outro/Personalizado") {
            customWrap.classList.toggle("open", willSelect);
            if (willSelect) {
              customInput.focus();
            }
          }
          // Atualizar array
          if (willSelect) {
            if (!bookingState.services.includes(val)) bookingState.services.push(val);
          } else {
            bookingState.services = bookingState.services.filter(s => s !== val);
          }
          updateBookingUI();
        });
      });
      customInput.addEventListener("input", (e) => {
        bookingState.customServiceText = e.target.value.trim();
        updateBookingUI();
      });
      // 3. Porte do Pet (Single Choice)
      setupSingleChoiceGroup('pet-size', (val) => {
        bookingState.petSize = val;
        updateBookingUI();
      });
      // 4. Preferências (Single Choice cada)
      setupSingleChoiceGroup('pref-day', (val) => {
        bookingState.prefDay = val;
        updateBookingUI();
      });
      setupSingleChoiceGroup('pref-period', (val) => {
        bookingState.prefPeriod = val;
        updateBookingUI();
      });
      updateBookingUI();
    }
    function setupSingleChoiceGroup(typeKey, onChange) {
      const buttons = document.querySelectorAll(`button[data-type="${typeKey}"]`);
      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          buttons.forEach(b => {
            b.setAttribute("aria-pressed", "false");
            b.setAttribute("aria-checked", "false");
          });
          btn.setAttribute("aria-pressed", "true");
          btn.setAttribute("aria-checked", "true");
          onChange(btn.dataset.value);
        });
      });
    }
    function updateBookingUI() {
      const btnSubmit = document.getElementById("btnSubmitBooking");
      const validationNotice = document.getElementById("validationNotice");
      const previewMsg = document.getElementById("previewMessage");
      // Validação: ao menos 1 serviço selecionado E porte selecionado
      const hasService = bookingState.services.length > 0;
      const hasSize = !!bookingState.petSize;
      const isValid = hasService && hasSize;
      if (isValid) {
        btnSubmit.removeAttribute("disabled");
        btnSubmit.setAttribute("aria-disabled", "false");
        validationNotice.textContent = "";
      } else {
        btnSubmit.setAttribute("disabled", "true");
        btnSubmit.setAttribute("aria-disabled", "true");
        validationNotice.textContent = "Selecione o serviço e o porte para continuar";
      }
      // Montagem do texto do preview
      let servicesFormatted = bookingState.services.map(s => {
        if (s === "Outro/Personalizado" && bookingState.customServiceText) {
          return `Outro (${bookingState.customServiceText})`;
        }
        return s;
      }).join(", ");
      if (!servicesFormatted) servicesFormatted = "(selecione o serviço)";
      const sizeFormatted = bookingState.petSize || "(selecione o porte)";
      const preferenceFormatted = `${bookingState.prefDay} pela ${bookingState.prefPeriod.toLowerCase()}`;
      const fullMessage = `Olá! Vim pelo site do Abelhinha Pet Shop e gostaria de agendar um atendimento. • Tipo: ${bookingState.petType} • Serviço: ${servicesFormatted} • Porte: ${sizeFormatted} • Preferência: ${preferenceFormatted}`;
      previewMsg.textContent = fullMessage;
    }
    function submitBooking() {
      const hasService = bookingState.services.length > 0;
      const hasSize = !!bookingState.petSize;
      if (!hasService || !hasSize) {
        const validationNotice = document.getElementById("validationNotice");
        validationNotice.textContent = "Selecione o serviço e o porte para continuar";
        return;
      }
      let servicesFormatted = bookingState.services.map(s => {
        if (s === "Outro/Personalizado" && bookingState.customServiceText) {
          return `Outro (${bookingState.customServiceText})`;
        }
        return s;
      }).join(", ");
      const preferenceFormatted = `${bookingState.prefDay} pela ${bookingState.prefPeriod.toLowerCase()}`;
      const msg = `Olá! Vim pelo site do Abelhinha Pet Shop e gostaria de agendar um atendimento. • Tipo: ${bookingState.petType} • Serviço: ${servicesFormatted} • Porte: ${bookingState.petSize} • Preferência: ${preferenceFormatted}`;
      const waUrl = `https://wa.me/5511983523034?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }
    function setupScrollEffects() {
      const nav = document.getElementById("siteHeader");
      const btnTop = document.getElementById("btnBackToTop");
      window.addEventListener("scroll", () => {
        const y = window.scrollY;
        if (y > 40) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
        if (y > 400) {
          btnTop.classList.add("visible");
        } else {
          btnTop.classList.remove("visible");
        }
      }, { passive: true });
      btnTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
    function escapeHtml(str) {
      return str.replace(/[&<>"']/g, function (m) {
        return ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"
        })[m];
      });
    }