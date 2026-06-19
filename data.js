// data.js

// レベル1データ（基本：固定問題）
const dataLv1 = {
    length: [
        // km からの変換
        { q: "1km = ? m", a: "1000m", exp: "kmからmへは1000倍します。" },
        { q: "1km = ? cm", a: "100000cm", exp: "kmからcmへは10万倍（1000×100）します。" },
        { q: "1km = ? mm", a: "1000000mm", exp: "kmからmmへは100万倍（1000×1000）します。" },
        // m からの変換
        { q: "1m = ? km", a: "0.001km", exp: "mからkmへは1000で割ります。" },
        { q: "1m = ? cm", a: "100cm", exp: "mからcmへは100倍します。" },
        { q: "1m = ? mm", a: "1000mm", exp: "mからmmへは1000倍（100×10）します。" },
        // cm からの変換
        { q: "1cm = ? km", a: "0.00001km", exp: "cmからkmへは10万で割ります。" },
        { q: "1cm = ? m", a: "0.01m", exp: "cmからmへは100で割ります。" },
        { q: "1cm = ? mm", a: "10mm", exp: "cmからmmへは10倍します。" },
        // mm からの変換
        { q: "1mm = ? km", a: "0.000001km", exp: "mmからkmへは100万で割ります。" },
        { q: "1mm = ? m", a: "0.001m", exp: "mmからmへは1000で割ります。" },
        { q: "1mm = ? cm", a: "0.1cm", exp: "mmからcmへは10で割ります。" }
    ],
    weight: [
        // t からの変換
        { q: "1t = ? kg", a: "1000kg", exp: "tからkgへは1000倍します。" },
        { q: "1t = ? g", a: "1000000g", exp: "tからgへは100万倍（1000×1000）します。" },
        // kg からの変換
        { q: "1kg = ? t", a: "0.001t", exp: "kgからtへは1000で割ります。" },
        { q: "1kg = ? g", a: "1000g", exp: "kgからgへは1000倍します。" },
        // g からの変換
        { q: "1g = ? t", a: "0.000001t", exp: "gからtへは100万で割ります。" },
        { q: "1g = ? kg", a: "0.001kg", exp: "gからkgへは1000で割ります。" }
    ],
    volume: [
        // m³ からの変換
        { q: "1m³ = ? L", a: "1000L", exp: "m³からLへは1000倍します。" },
        { q: "1m³ = ? cm³", a: "1000000cm³", exp: "m³からcm³へは100cm×100cm×100cmで100万倍します。" },
        // L からの変換
        { q: "1L = ? m³", a: "0.001m³", exp: "Lからm³へは1000で割ります。" },
        { q: "1L = ? dL", a: "10dL", exp: "LからdLへは10倍します。" },
        { q: "1L = ? mL", a: "1000mL", exp: "LからmLへは1000倍します。" },
        { q: "1L = ? cm³", a: "1000cm³", exp: "Lからcm³へは1000倍します。" },
        // dL からの変換
        { q: "1dL = ? L", a: "0.1L", exp: "dLからLへは10で割ります。" },
        { q: "1dL = ? mL", a: "100mL", exp: "dLからmLへは100倍します。" },
        { q: "1dL = ? cm³", a: "100cm³", exp: "dLからcm³へは100倍します。" },
        // mL からの変換
        { q: "1mL = ? L", a: "0.001L", exp: "mLからLへは1000で割ります。" },
        { q: "1mL = ? dL", a: "0.01dL", exp: "mLからdLへは100で割ります。" },
        { q: "1mL = ? cm³", a: "1cm³", exp: "1mLと1cm³は同じ量です。" },
        // cm³ からの変換
        { q: "1cm³ = ? m³", a: "0.000001m³", exp: "cm³からm³へは100万で割ります。" },
        { q: "1cm³ = ? L", a: "0.001L", exp: "cm³からLへは1000で割ります。" },
        { q: "1cm³ = ? dL", a: "0.01dL", exp: "cm³からdLへは100で割ります。" },
        { q: "1cm³ = ? mL", a: "1mL", exp: "1cm³と1mLは同じ量です。" }
    ],
    area: [
        // km² からの変換
        { q: "1km² = ? ha", a: "100ha", exp: "km²からhaへは100倍します。" },
        { q: "1km² = ? a", a: "10000a", exp: "km²からaへは1万倍します。" },
        { q: "1km² = ? m²", a: "1000000m²", exp: "1000m × 1000m で100万倍です。" },
        // ha からの変換
        { q: "1ha = ? km²", a: "0.01km²", exp: "haからkm²へは100で割ります。" },
        { q: "1ha = ? a", a: "100a", exp: "1haは100aです。" },
        { q: "1ha = ? m²", a: "10000m²", exp: "1haは　100m×100mで 10000m²です。" },
        // a からの変換
        { q: "1a = ? km²", a: "0.0001km²", exp: "aからkm²へは1万で割ります。" },
        { q: "1a = ? ha", a: "0.01ha", exp: "aからhaへは100で割ります。" },
        { q: "1a = ? m²", a: "100m²", exp: "1aは 10m×10m　で100m²です。" },
        // m² からの変換
        { q: "1m² = ? km²", a: "0.000001km²", exp: "m²からkm²へは100万で割ります。" },
        { q: "1m² = ? ha", a: "0.0001ha", exp: "m²からhaへは1万で割ります。" },
        { q: "1m² = ? a", a: "0.01a", exp: "m²からaへは100で割ります。" },
        { q: "1m² = ? cm²", a: "10000cm²", exp: "100cm × 100cm で1万倍です。" },
        // cm² からの変換
        { q: "1cm² = ? m²", a: "0.0001m²", exp: "cm²からm²へは1万で割ります。" }
    ],
    time: [
        // 日 からの変換
        { q: "1日 = ? 時間", a: "24時間", exp: "1日は24時間です。" },
        { q: "1日 = ? 分", a: "1440分", exp: "24時間 × 60分 で1440分です。" },
        { q: "1日 = ? 秒", a: "86400秒", exp: "1440分 × 60秒 で86400秒です。" },
        // 時間 からの変換
        { q: "1時間 = ? 日", a: "0.041666日", exp: "時間から日へは24で割ります。" },
        { q: "1時間 = ? 分", a: "60分", exp: "1時間は60分です。" },
        { q: "1時間 = ? 秒", a: "3600秒", exp: "60分 × 60秒 で3600秒です。" },
        // 分 からの変換
        { q: "1分 = ? 日", a: "0.000694日", exp: "分から日へは1440で割ります。" },
        { q: "1分 = ? 時間", a: "0.016666時間", exp: "分から時間へは60で割ります。" },
        { q: "1分 = ? 秒", a: "60秒", exp: "1分は60秒です。" },
        // 秒 からの変換
        { q: "1秒 = ? 日", a: "0.000011日", exp: "秒から日へは86400で割ります。" },
        { q: "1秒 = ? 時間", a: "0.000277時間", exp: "秒から時間へは3600で割ります。" },
        { q: "1秒 = ? 分", a: "0.016666分", exp: "秒から分へは60で割ります。" }
    ]
};

// レベル2ひな形（応用：数値ランダム用）
const lv2Blueprints = {
    length: [
        { from: "km", to: "m", rate: 1000, type: "mul" },
        { from: "km", to: "cm", rate: 100000, type: "mul" },
        { from: "km", to: "mm", rate: 1000000, type: "mul" },
        { from: "m", to: "km", rate: 1000, type: "div" },
        { from: "m", to: "cm", rate: 100, type: "mul" },
        { from: "m", to: "mm", rate: 1000, type: "mul" },
        { from: "cm", to: "km", rate: 100000, type: "div" },
        { from: "cm", to: "m", rate: 100, type: "div" },
        { from: "cm", to: "mm", rate: 10, type: "mul" },
        { from: "mm", to: "km", rate: 1000000, type: "div" },
        { from: "mm", to: "m", rate: 1000, type: "div" },
        { from: "mm", to: "cm", rate: 10, type: "div" }
    ],
    weight: [
        { from: "t", to: "kg", rate: 1000, type: "mul" },
        { from: "t", to: "g", rate: 1000000, type: "mul" },
        { from: "kg", to: "t", rate: 1000, type: "div" },
        { from: "kg", to: "g", rate: 1000, type: "mul" },
        { from: "g", to: "t", rate: 1000000, type: "div" },
        { from: "g", to: "kg", rate: 1000, type: "div" }
    ],
    volume: [
        { from: "m³", to: "L", rate: 1000, type: "mul" },
        { from: "m³", to: "cm³", rate: 1000000, type: "mul" },
        { from: "L", to: "m³", rate: 1000, type: "div" },
        { from: "L", to: "dL", rate: 10, type: "mul" },
        { from: "L", to: "mL", rate: 1000, type: "mul" },
        { from: "L", to: "cm³", rate: 1000, type: "mul" },
        { from: "dL", to: "L", rate: 10, type: "div" },
        { from: "dL", to: "mL", rate: 100, type: "mul" },
        { from: "dL", to: "cm³", rate: 100, type: "mul" },
        { from: "mL", to: "L", rate: 1000, type: "div" },
        { from: "mL", to: "dL", rate: 100, type: "div" },
        { from: "mL", to: "cm³", rate: 1, type: "mul" },
        { from: "cm³", to: "m³", rate: 1000000, type: "div" },
        { from: "cm³", to: "L", rate: 1000, type: "div" },
        { from: "cm³", to: "dL", rate: 100, type: "div" },
        { from: "cm³", to: "mL", rate: 1, type: "mul" }
    ],
    area: [
        { from: "km²", to: "ha", rate: 100, type: "mul" },
        { from: "km²", to: "a", rate: 10000, type: "mul" },
        { from: "km²", to: "m²", rate: 1000000, type: "mul" },
        { from: "ha", to: "km²", rate: 100, type: "div" },
        { from: "ha", to: "a", rate: 100, type: "mul" },
        { from: "ha", to: "m²", rate: 10000, type: "mul" },
        { from: "a", to: "km²", rate: 10000, type: "div" },
        { from: "a", to: "ha", rate: 100, type: "div" },
        { from: "a", to: "m²", rate: 100, type: "mul" },
        { from: "m²", to: "km²", rate: 1000000, type: "div" },
        { from: "m²", to: "ha", rate: 10000, type: "div" },
        { from: "m²", to: "a", rate: 100, type: "div" },
        { from: "m²", to: "cm²", rate: 10000, type: "mul" },
        { from: "cm²", to: "m²", rate: 10000, type: "div" }
    ],
   time: [
        { from: "日", to: "時間", rate: 24, type: "mul" },
        { from: "日", to: "分", rate: 1440, type: "mul" },
        { from: "日", to: "秒", rate: 86400, type: "mul" },
        { from: "時間", to: "分", rate: 60, type: "mul" },
        { from: "時間", to: "秒", rate: 3600, type: "mul" },
        { from: "分", to: "秒", rate: 60, type: "mul" }
    ]
};