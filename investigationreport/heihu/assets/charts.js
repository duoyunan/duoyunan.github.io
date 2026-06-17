(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim() || '#1e40af';
  var accent2 = style.getPropertyValue('--accent2').trim() || '#0ea5e9';
  var ink = style.getPropertyValue('--ink').trim() || '#1e293b';
  var muted = style.getPropertyValue('--muted').trim() || '#64748b';
  var rule = style.getPropertyValue('--rule').trim() || '#e2e8f0';
  var bg2 = style.getPropertyValue('--bg2').trim() || '#ffffff';

  // --- Chart: AI Agent Task Growth ---
  var chartAi = echarts.init(document.getElementById('chart-ai-growth'), null, { renderer: 'svg' });
  chartAi.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      appendToBody: true,
      axisPointer: { type: 'shadow' }
    },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '12%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['2023Q1', '2023Q2', '2023Q3', '2023Q4', '2024Q1', '2024Q2', '2024Q3', '2024Q4', '2025Q1', '2025Q2'],
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 11 }
    },
    yAxis: {
      type: 'value',
      name: '累计执行任务（百万次）',
      nameTextStyle: { color: muted, fontSize: 11 },
      axisLine: { show: false },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      axisLabel: { color: muted, fontSize: 11 }
    },
    series: [{
      name: 'AI Agent 累计任务',
      type: 'bar',
      data: [0.5, 1.2, 2.5, 4.8, 7.5, 10.2, 12.8, 14.5, 15.5, 16.0],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: accent2 },
          { offset: 1, color: accent }
        ]),
        borderRadius: [4, 4, 0, 0]
      },
      barWidth: '50%'
    }]
  });
  window.addEventListener('resize', function() { chartAi.resize(); });

  // --- Chart: Market Share Pie ---
  var chartPie = echarts.init(document.getElementById('chart-market-share'), null, { renderer: 'svg' });
  chartPie.setOption({
    animation: false,
    tooltip: {
      trigger: 'item',
      appendToBody: true,
      formatter: '{b}: {c}%'
    },
    legend: {
      orient: 'vertical',
      right: '5%',
      top: 'center',
      textStyle: { color: ink, fontSize: 12 }
    },
    series: [{
      name: '云化MES市场份额',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['40%', '50%'],
      avoidLabelOverlap: true,
      itemStyle: { borderRadius: 6, borderColor: bg2, borderWidth: 2 },
      label: { show: true, formatter: '{b}\n{c}%', color: ink, fontSize: 12 },
      labelLine: { lineStyle: { color: rule } },
      data: [
        { value: 52.7, name: '黑湖科技', itemStyle: { color: accent } },
        { value: 19.6, name: '新核云', itemStyle: { color: accent2 } },
        { value: 8.3, name: '其他本土厂商', itemStyle: { color: '#94a3b8' } },
        { value: 12.5, name: '西门子', itemStyle: { color: '#cbd5e1' } },
        { value: 6.9, name: '其他国际厂商', itemStyle: { color: '#e2e8f0' } }
      ]
    }]
  });
  window.addEventListener('resize', function() { chartPie.resize(); });

  // --- Chart: Competitive Radar ---
  var chartRadar = echarts.init(document.getElementById('chart-radar'), null, { renderer: 'svg' });
  chartRadar.setOption({
    animation: false,
    tooltip: { appendToBody: true },
    legend: {
      bottom: '0%',
      textStyle: { color: ink, fontSize: 12 }
    },
    radar: {
      indicator: [
        { name: '云原生能力', max: 100 },
        { name: 'AI能力', max: 100 },
        { name: '客户覆盖', max: 100 },
        { name: '行业Know-How', max: 100 },
        { name: '部署速度', max: 100 },
        { name: '生态合作', max: 100 },
        { name: '性价比', max: 100 }
      ],
      shape: 'polygon',
      splitNumber: 4,
      axisName: { color: muted, fontSize: 11 },
      splitLine: { lineStyle: { color: rule } },
      splitArea: { show: true, areaStyle: { color: [bg2, 'rgba(30,64,175,0.02)'] } },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      name: '能力对比',
      type: 'radar',
      data: [
        {
          value: [95, 90, 85, 80, 95, 75, 90],
          name: '黑湖科技',
          lineStyle: { color: accent, width: 2 },
          areaStyle: { color: accent + '33' },
          itemStyle: { color: accent }
        },
        {
          value: [60, 55, 70, 85, 40, 90, 50],
          name: '西门子',
          lineStyle: { color: '#94a3b8', width: 2 },
          areaStyle: { color: 'rgba(148,163,184,0.15)' },
          itemStyle: { color: '#94a3b8' }
        },
        {
          value: [50, 45, 60, 75, 55, 60, 65],
          name: '鼎捷MES',
          lineStyle: { color: '#cbd5e1', width: 2 },
          areaStyle: { color: 'rgba(203,213,225,0.15)' },
          itemStyle: { color: '#cbd5e1' }
        },
        {
          value: [80, 55, 70, 60, 80, 55, 85],
          name: '新核云',
          lineStyle: { color: accent2, width: 2 },
          areaStyle: { color: accent2 + '22' },
          itemStyle: { color: accent2 }
        }
      ]
    }]
  });
  window.addEventListener('resize', function() { chartRadar.resize(); });
})();
