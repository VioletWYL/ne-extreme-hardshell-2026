(function () {
  const D = window.HARDSHELL_DATA;
  if (!D) return;

  const pMap = Object.fromEntries(D.products.map(p => [p.id, p]));
  let activeCat = 'all';
  let activeScenario = 'all';
  let sortKey = 'rank';
  let sortDir = 1;

  // Populate Hero Profile Note & Google Drive Button
  const profileNoteEl = document.getElementById('hero-profile-note');
  if (profileNoteEl) {
    profileNoteEl.innerHTML = `<strong>已有系统：</strong>${D.meta.userProfile.existingKit}<br>${D.meta.userProfile.layeringNote}`;
  }

  const driveBtn = document.getElementById('drive-pdf-link');
  if (driveBtn) {
    if (D.meta.drivePdfUrl && D.meta.drivePdfUrl.startsWith('http')) {
      driveBtn.href = D.meta.drivePdfUrl;
      driveBtn.style.display = 'inline-flex';
    } else {
      driveBtn.style.display = 'none';
    }
  }

  // 1. Render System Guide + 3 Regimes
  const layerGrid = document.getElementById('layer-grid');
  if (layerGrid) {
    layerGrid.innerHTML = D.systemGuide.map((l, idx) => `
      <article class="layer-item ${idx === 2 ? 'is-focus' : ''}">
        <div class="layer-title">${l.layer}</div>
        <div class="layer-spec">${l.spec}</div>
        <p class="layer-body">${l.advice180_80}</p>
      </article>
    `).join('');
  }

  const regimeGrid = document.getElementById('regime-grid');
  if (regimeGrid) {
    regimeGrid.innerHTML = D.regimes.map(r => `
      <article class="regime-card">
        <h3>${r.title}</h3>
        <div class="regime-meta">${r.combo}</div>
        <p>${r.detail}</p>
      </article>
    `).join('');
  }

  // 2. Render 3 Tier Ultimate Picks
  const ultTrio = document.getElementById('ultimate-trio');
  if (ultTrio) {
    ultTrio.innerHTML = D.ultimates.map(u => {
      const p = pMap[u.productId];
      return `
        <article class="ult-spotlight">
          <div class="ult-badge-row">
            <span class="tag-ochre">★ ${u.tierTitle}</span>
            <span class="tag-sku">${u.tag}</span>
          </div>
          <div class="ult-media">
            <div class="ult-img-box"><img src="${p.image}" alt="${p.brandCn} ${p.name}" loading="lazy"></div>
            <div class="ult-titles">
              <h3>${p.brandCn} ${p.brand}<br>${p.name.split('（')[0]}</h3>
              <div class="ult-price">${p.price.display.split('（')[0]}</div>
              <div class="sku-line" style="margin:2px 0 0;">SKU: ${p.sku.split('（')[0]}</div>
            </div>
          </div>
          <p class="ult-reason">${u.summary}</p>
          <div class="ult-size-callout">180/80 叠加 F1106KH 选码：${u.pick180_80}</div>
          <div class="ult-footer-link">
            <a href="#card-${p.id}">跳至深度档案 ↓</a>
            <a href="${p.urls.official}" target="_blank" rel="noopener noreferrer">官网直达 ↗</a>
          </div>
        </article>
      `;
    }).join('');
  }

  // 3. Render 10 Product Catalog Cards
  const catalogGrid = document.getElementById('catalog-grid');
  function renderCatalog() {
    if (!catalogGrid) return;
    const scenarioObj = D.scenarios.find(s => s.id === activeScenario) || D.scenarios[0];
    const banner = document.getElementById('scenario-banner');
    if (banner) {
      banner.innerHTML = `<strong>${scenarioObj.label}：</strong>${scenarioObj.shortDesc}`;
    }

    catalogGrid.innerHTML = D.products.map(p => {
      const matchCat = activeCat === 'all' || p.category === activeCat;
      const matchScen = activeScenario === 'all' || scenarioObj.recommendedIds.includes(p.id);
      const hidden = !(matchCat && matchScen);

      const badgeHtml = p.isUltimate
        ? `<span class="pill-ult">${p.ultimateTitle}</span>`
        : (p.ultimateTitle.includes('⚠️')
            ? `<span class="pill-warn">${p.ultimateTitle}</span>`
            : `<span class="pill-alt">${p.ultimateTitle}</span>`);

      return `
        <article id="card-${p.id}" class="product-card ${p.isUltimate ? 'is-ultimate' : ''} ${hidden ? 'is-hidden' : ''}">
          <div class="card-header">
            <div class="card-photo">
              <img src="${p.image}" alt="${p.brandCn} ${p.name}" loading="lazy">
            </div>
            <div class="card-head-info">
              <div class="pill-row">
                <span class="pill-rank">#${String(p.rank).padStart(2, '0')} · ${p.categoryLabel}</span>
                ${badgeHtml}
              </div>
              <h3>${p.brandCn} (${p.brand}) · ${p.name}</h3>
              <div class="sku-line">型号/SKU: ${p.sku}</div>
              <div class="price-line">${p.price.display}<span class="price-ref">${p.price.officialRef}</span></div>
            </div>
          </div>

          <div class="specs-table-mini">
            <div><span class="spec-pair-k">防水薄膜与胶条</span><span class="spec-pair-v">${p.specs.membrane}</span></div>
            <div><span class="spec-pair-k">面布材质/纱支 (D)</span><span class="spec-pair-v">${p.specs.faceFabric}</span></div>
            <div><span class="spec-pair-k">静态防水 &amp; 透气散热</span><span class="spec-pair-v">${p.specs.waterproofMm.split('（')[0]} ｜ ${p.specs.breathabilityMetric.split('（')[0]}</span></div>
            <div><span class="spec-pair-k">官方/实称成衣重</span><span class="spec-pair-v">${p.specs.garmentWeight}</span></div>
            <div><span class="spec-pair-k">门襟拉链与腋下散热</span><span class="spec-pair-v">${p.specs.zippers}</span></div>
            <div><span class="spec-pair-k">风帽/雪裙 &amp; 口袋数</span><span class="spec-pair-v">${p.specs.hoodAndSkirt} ｜ ${p.specs.pockets.split('（')[0]}</span></div>
          </div>

          <div class="size-callout-block">
            <div class="size-callout-title">180/80 叠穿美利奴+黑冰 F1106KH 选码：${p.size180_80.pick}</div>
            <div>${p.size180_80.detail}</div>
          </div>

          <p class="official-copy"><strong>官方核心说明：</strong>${p.officialDesc}</p>

          <ul class="rationale-list">
            ${p.rationale.map(r => `<li>${r}</li>`).join('')}
          </ul>

          <div class="card-audit-box">
            <div class="card-audit-head">内容可信度审查：已逐条精读 ${p.audit.userReviewsRead} 条买家实评${p.audit.qaRead ? ` + ${p.audit.qaRead} 组官方Q&A` : ''} + ${p.audit.proTestsRead} 篇专业测试/渠道拆解</div>
            <div><strong>全平台原始评论盘子：</strong>${p.audit.totalReviewsPlatform}</div>
            <div><strong>独立信源与排广告机制：</strong>${p.audit.proTestSources}；${p.audit.credibilityAndAdFilter}</div>
            <ul class="card-audit-quotes">
              ${p.audit.userReviewQuotes.map(q => `<li>${q}</li>`).join('')}
            </ul>
          </div>

          <div class="card-links">
            <a href="${p.urls.official}" target="_blank" rel="noopener noreferrer">官网/权威归档 ↗</a>
            <a href="${p.urls.taobao}" target="_blank" rel="noopener noreferrer">${p.urls.taobaoLabel}</a>
            <a href="${p.urls.jd}" target="_blank" rel="noopener noreferrer">${p.urls.jdLabel}</a>
            <span class="sku-match-badge ${p.skuMatchOk ? '' : 'has-caveat'}">${p.skuMatchOk ? '✓ 型号链接核对一致' : '⚠ 下单必查SKU版本'}</span>
          </div>
        </article>
      `;
    }).join('');
  }

  document.querySelectorAll('.filter-btn[data-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn[data-cat]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeCat = btn.dataset.cat;
      renderCatalog();
    });
  });

  document.querySelectorAll('.scenario-btn[data-scenario]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.scenario-btn[data-scenario]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeScenario = btn.dataset.scenario;
      renderCatalog();
    });
  });

  // 4. Render & Sort Comparison Table
  const tbody = document.getElementById('matrix-tbody');
  function renderMatrix() {
    if (!tbody) return;
    const sorted = [...D.products].sort((a, b) => {
      let va, vb;
      if (sortKey === 'price') { va = a.price.tierNumeric; vb = b.price.tierNumeric; }
      else if (sortKey === 'weight') { va = a.specs.garmentWeightNum; vb = b.specs.garmentWeightNum; }
      else if (sortKey === 'waterproof') { va = a.scores.waterproof; vb = b.scores.waterproof; }
      else if (sortKey === 'breathability') { va = a.scores.breathability; vb = b.scores.breathability; }
      else if (sortKey === 'durability') { va = a.scores.durability; vb = b.scores.durability; }
      else if (sortKey === 'snowDefense') { va = a.scores.snowDefense; vb = b.scores.snowDefense; }
      else if (sortKey === 'overall') { va = a.scores.overall; vb = b.scores.overall; }
      else { va = a.rank; vb = b.rank; }
      return (va - vb) * sortDir;
    });

    tbody.innerHTML = sorted.map(p => `
      <tr class="${p.isUltimate ? 'row-ultimate' : ''}">
        <td>
          <strong>${p.isUltimate ? '★ ' : ''}#${p.rank} ${p.brandCn}</strong><br>
          <a href="#card-${p.id}">${p.name.split('（')[0]}</a><br>
          <span class="tabular" style="font-size:11.5px;color:#5C6875;">${p.sku.split('（')[0]}</span>
        </td>
        <td>${p.categoryLabel}${p.isUltimate ? '<br><span style="color:#B45309;font-weight:700;font-size:11px;">本类终极</span>' : ''}</td>
        <td class="tabular">${p.price.display.split('（')[0]}</td>
        <td>${p.specs.membrane.split('（')[0]}<br><span style="font-size:11.5px;color:#5C6875;">${p.specs.faceFabric.split('（')[0]}</span></td>
        <td class="tabular">${p.specs.garmentWeight.split('（')[0]}</td>
        <td>${p.specs.zippers.replace('主防水拉链', '主链')}<br><span style="font-size:11.5px;color:#5C6875;">${p.specs.hoodAndSkirt}</span></td>
        <td class="tabular">${p.scores.waterproof} / 5</td>
        <td class="tabular">${p.scores.breathability} / 5</td>
        <td class="tabular">${p.scores.snowDefense} / 5</td>
        <td><strong>${p.size180_80.pick.split('（')[0]}</strong></td>
        <td class="tabular"><strong>${p.scores.overall}</strong><br><span style="font-size:11px;color:#166534;">读${p.audit.userReviewsRead}评/${p.audit.proTestsRead}测</span></td>
      </tr>
    `).join('');
  }

  document.querySelectorAll('.sort-btn[data-sort]').forEach(btn => {
    btn.addEventListener('click', () => {
      const k = btn.dataset.sort;
      if (sortKey === k) sortDir *= -1;
      else { sortKey = k; sortDir = (k === 'price' || k === 'weight') ? 1 : -1; }
      renderMatrix();
    });
  });

  // 5. Render Audit KPIs, Eliminations, Findings & SKU Audit Table
  const kpiWrap = document.getElementById('audit-kpis');
  if (kpiWrap) {
    const t = D.meta.auditTotals;
    const kpis = [
      { n: '19,300+', l: '跨平台原评论大盘（已剥离三合一混算及虚假好评）' },
      { n: `${t.individualUserReviewsRead} 条实评`, l: `人工逐条精读买家评价（另有 ${t.officialQAsRead} 组一问一答）` },
      { n: `${t.independentFieldTestsRead} 篇大媒`, l: 'OutdoorGearLab / Switchback / BetterTrail 等独立测' },
      { n: `${t.channelAndForumAuditsRead} 份甄别`, l: 'Reddit 尺码 / 山姆差价 / AI生成假文章拆穿与剔除' }
    ];
    kpiWrap.innerHTML = kpis.map(k => `
      <div class="kpi-box">
        <div class="kpi-num">${k.n}</div>
        <div class="kpi-label">${k.l}</div>
      </div>
    `).join('');
  }

  const findingsWrap = document.getElementById('audit-findings');
  if (findingsWrap) {
    findingsWrap.innerHTML = D.auditFindings.map(f => `
      <article class="finding-card ${f.isWarning ? 'is-warning' : ''}">
        <div class="finding-type">${f.type}</div>
        <h3>核验对象：${f.target}</h3>
        <p>${f.finding}</p>
      </article>
    `).join('');
  }

  const elimGrid = document.getElementById('elim-grid');
  if (elimGrid) {
    elimGrid.innerHTML = D.eliminatedCandidates.map(e => `
      <article class="elim-card">
        <h4>[已淘汰/规避] ${e.name}（${e.price}）</h4>
        <p>${e.reason}</p>
      </article>
    `).join('');
  }

  const auditTbody = document.getElementById('link-audit-tbody');
  if (auditTbody) {
    auditTbody.innerHTML = D.products.map(p => `
      <tr>
        <td><strong>#${p.rank} ${p.brandCn}</strong><br><span class="tabular" style="font-size:11.5px;">${p.sku}</span></td>
        <td class="tabular">${p.audit.totalReviewsPlatform}</td>
        <td class="tabular">实评 <strong>${p.audit.userReviewsRead}</strong> 条${p.audit.qaRead ? ` + ${p.audit.qaRead} Q&A` : ''}<br>测评/档案 <strong>${p.audit.proTestsRead}</strong> 篇</td>
        <td><a href="${p.urls.taobao}" target="_blank" rel="noopener noreferrer">淘宝/天猫直达 ↗</a> ｜ <a href="${p.urls.jd}" target="_blank" rel="noopener noreferrer">京东页 ↗</a></td>
        <td><span class="sku-match-badge ${p.skuMatchOk ? '' : 'has-caveat'}">${p.skuVerification}</span></td>
      </tr>
    `).join('');
  }

  renderCatalog();
  renderMatrix();
})();
