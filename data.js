/* ============================================================
   AWHP 대시보드 데이터 파일  (data.js)
   ------------------------------------------------------------
   ★ 대시보드를 업데이트하려면 이 파일의 숫자/텍스트만 고치면 됩니다.
     index.html(코드)은 건드릴 필요가 없습니다.

   - meta.lastUpdated : 화면 상단 '최종 업데이트' 날짜
   - charts.<차트이름>.datasets[].data : 각 그래프의 숫자
   고친 뒤 저장하고 브라우저 새로고침하면 바로 반영됩니다.
   ============================================================ */
window.DASHBOARD_DATA = {
  meta: {
    "lastUpdated": "2026년 5월 17일",
    "lastUpdatedNote": "(W17~W20 주간 인사이트 반영)",
    "dataSources": "EHPA, EU F-Gas/EPBD, 주간 인사이트(W17~W20), 각사 PR, 시장 리서치"
  },

  charts: {
    "euSalesChart": {
      "labels": [
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025"
      ],
      "datasets": [
        {
          "label": "유럽 히트펌프 판매량 (만대)",
          "data": [
            170,
            220,
            300,
            310,
            238,
            263
          ],
          "backgroundColor": [
            "rgba(56,189,248,.5)",
            "rgba(56,189,248,.5)",
            "rgba(56,189,248,.5)",
            "rgba(56,189,248,.5)",
            "rgba(239,68,68,.5)",
            "rgba(52,211,153,.5)"
          ],
          "borderColor": [
            "#38bdf8",
            "#38bdf8",
            "#38bdf8",
            "#38bdf8",
            "#ef4444",
            "#34d399"
          ],
          "borderWidth": 1,
          "borderRadius": 4
        }
      ]
    },
    "marketSizeChart": {
      "labels": [
        "2024",
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
        "2030",
        "2031",
        "2032",
        "2033"
      ],
      "datasets": [
        {
          "label": "CAGR 8.5% (보수적)",
          "data": [
            58,
            66,
            72,
            78,
            84,
            91,
            99,
            108,
            117,
            152
          ],
          "borderColor": "#38bdf8",
          "backgroundColor": "rgba(56,189,248,.1)",
          "fill": true,
          "tension": 0.3
        },
        {
          "label": "CAGR 13.7% (낙관적)",
          "data": [
            58,
            66,
            75,
            85,
            97,
            110,
            125,
            142,
            162,
            185
          ],
          "borderColor": "#34d399",
          "backgroundColor": "rgba(52,211,153,.1)",
          "fill": true,
          "tension": 0.3
        }
      ]
    },
    "regionShareChart": {
      "labels": [
        "유럽 (~40%)",
        "아시아태평양 (~30%)",
        "북미 (~20%)",
        "기타 (~10%)"
      ],
      "datasets": [
        {
          "data": [
            40,
            30,
            20,
            10
          ],
          "backgroundColor": [
            "#38bdf8",
            "#818cf8",
            "#34d399",
            "#fb923c"
          ],
          "borderColor": "#1e293b",
          "borderWidth": 3
        }
      ]
    },
    "marketShareChart": {
      "labels": [
        "Johnson Controls",
        "Carrier",
        "Daikin",
        "Hitachi",
        "Systemair",
        "LG",
        "Trane",
        "Samsung",
        "Mitsubishi",
        "Vaillant"
      ],
      "datasets": [
        {
          "label": "글로벌 점유율 (%)",
          "data": [
            5.47,
            4.81,
            3.89,
            2.54,
            2.42,
            1.79,
            1.5,
            1.2,
            1.1,
            0.9
          ],
          "backgroundColor": [
            "#fb923c",
            "#34d399",
            "#ef4444",
            "#818cf8",
            "#94a3b8",
            "#38bdf8",
            "#f472b6",
            "#818cf8",
            "#fb923c",
            "#34d399"
          ],
          "borderRadius": 4
        }
      ]
    },
    "subsidyChart": {
      "labels": [
        "보조금 규모",
        "접근 용이성",
        "시장 성숙도",
        "성장 잠재력",
        "정책 안정성"
      ],
      "datasets": [
        {
          "label": "독일",
          "data": [
            10,
            7,
            9,
            8,
            8
          ],
          "borderColor": "#38bdf8",
          "backgroundColor": "rgba(56,189,248,.1)",
          "pointBackgroundColor": "#38bdf8"
        },
        {
          "label": "영국",
          "data": [
            8,
            8,
            7,
            7,
            9
          ],
          "borderColor": "#f472b6",
          "backgroundColor": "rgba(244,114,182,.1)",
          "pointBackgroundColor": "#f472b6"
        },
        {
          "label": "네덜란드",
          "data": [
            7,
            8,
            8,
            6,
            8
          ],
          "borderColor": "#34d399",
          "backgroundColor": "rgba(52,211,153,.1)",
          "pointBackgroundColor": "#34d399"
        },
        {
          "label": "미국",
          "data": [
            7,
            6,
            4,
            10,
            6
          ],
          "borderColor": "#fb923c",
          "backgroundColor": "rgba(251,146,60,.1)",
          "pointBackgroundColor": "#fb923c"
        },
        {
          "label": "프랑스",
          "data": [
            8,
            6,
            8,
            7,
            4
          ],
          "borderColor": "#ef4444",
          "backgroundColor": "rgba(239,68,68,.1)",
          "pointBackgroundColor": "#ef4444"
        }
      ]
    },
    "responseRadarChart": {
      "labels": [
        "R-290 주거용",
        "R-290 상업/산업",
        "75°C 고온 출수",
        "초저소음",
        "유량제어 기술",
        "SCOP 효율"
      ],
      "datasets": [
        {
          "label": "Daikin",
          "data": [
            10,
            10,
            9,
            8,
            4,
            8
          ],
          "borderColor": "#ef4444",
          "backgroundColor": "rgba(239,68,68,.06)",
          "pointBackgroundColor": "#ef4444",
          "borderWidth": 2
        },
        {
          "label": "LG",
          "data": [
            9,
            3,
            9,
            10,
            10,
            7
          ],
          "borderColor": "#38bdf8",
          "backgroundColor": "rgba(56,189,248,.06)",
          "pointBackgroundColor": "#38bdf8",
          "borderWidth": 2
        },
        {
          "label": "Samsung",
          "data": [
            9,
            3,
            6,
            7,
            7,
            7
          ],
          "borderColor": "#818cf8",
          "backgroundColor": "rgba(129,140,248,.06)",
          "pointBackgroundColor": "#818cf8",
          "borderWidth": 2
        },
        {
          "label": "Vaillant",
          "data": [
            8,
            3,
            9,
            8,
            6,
            7
          ],
          "borderColor": "#34d399",
          "backgroundColor": "rgba(52,211,153,.06)",
          "pointBackgroundColor": "#34d399",
          "borderWidth": 2
        },
        {
          "label": "Panasonic",
          "data": [
            8,
            9,
            7,
            8,
            7,
            7
          ],
          "borderColor": "#fb923c",
          "backgroundColor": "rgba(251,146,60,.06)",
          "pointBackgroundColor": "#fb923c",
          "borderWidth": 2
        },
        {
          "label": "NIBE",
          "data": [
            7,
            3,
            5,
            8,
            5,
            10
          ],
          "borderColor": "#f472b6",
          "backgroundColor": "rgba(244,114,182,.06)",
          "pointBackgroundColor": "#f472b6",
          "borderWidth": 2
        }
      ]
    },
    "noiseChart": {
      "labels": [
        "LG\nTherma V R290",
        "Daikin\nAltherma 4 ⚠",
        "NIBE\nF2050",
        "Panasonic\nAquarea R290",
        "Vaillant\naroTHERM+",
        "Samsung\nGen7 R290"
      ],
      "datasets": [
        {
          "label": "SWL 최저/저부하 (dBA)",
          "data": [
            49,
            50,
            53,
            53,
            54,
            55
          ],
          "backgroundColor": [
            "rgba(56,189,248,.8)",
            "rgba(239,68,68,.7)",
            "rgba(244,114,182,.7)",
            "rgba(251,146,60,.7)",
            "rgba(52,211,153,.7)",
            "rgba(129,140,248,.7)"
          ],
          "borderRadius": 4
        },
        {
          "label": "SWL 정격/최대 (dBA)",
          "data": [
            52,
            54,
            53,
            54,
            54,
            55
          ],
          "backgroundColor": [
            "rgba(56,189,248,.4)",
            "rgba(239,68,68,.35)",
            "rgba(244,114,182,.35)",
            "rgba(251,146,60,.35)",
            "rgba(52,211,153,.35)",
            "rgba(129,140,248,.35)"
          ],
          "borderRadius": 4
        }
      ]
    },
    "safetyRadarChart": {
      "labels": [
        "Thermal Cutout\n문서화",
        "수압/누수\n감지 스펙",
        "냉매 안전\n(R-290 대비)",
        "전기안전\n규격 상세도",
        "소음 규제\n대응력"
      ],
      "datasets": [
        {
          "label": "Daikin",
          "data": [
            7,
            6,
            7,
            8,
            8
          ],
          "borderColor": "#ef4444",
          "backgroundColor": "rgba(239,68,68,.06)",
          "pointBackgroundColor": "#ef4444",
          "borderWidth": 2
        },
        {
          "label": "LG",
          "data": [
            9,
            10,
            6,
            7,
            10
          ],
          "borderColor": "#38bdf8",
          "backgroundColor": "rgba(56,189,248,.06)",
          "pointBackgroundColor": "#38bdf8",
          "borderWidth": 2
        },
        {
          "label": "Samsung",
          "data": [
            8,
            8,
            9,
            10,
            7
          ],
          "borderColor": "#818cf8",
          "backgroundColor": "rgba(129,140,248,.06)",
          "pointBackgroundColor": "#818cf8",
          "borderWidth": 2
        },
        {
          "label": "Vaillant",
          "data": [
            8,
            7,
            10,
            5,
            8
          ],
          "borderColor": "#34d399",
          "backgroundColor": "rgba(52,211,153,.06)",
          "pointBackgroundColor": "#34d399",
          "borderWidth": 2
        },
        {
          "label": "NIBE",
          "data": [
            7,
            7,
            6,
            8,
            8
          ],
          "borderColor": "#f472b6",
          "backgroundColor": "rgba(244,114,182,.06)",
          "pointBackgroundColor": "#f472b6",
          "borderWidth": 2
        }
      ]
    },
    "footprintChart": {
      "labels": [
        "Vaillant\n(3.5-5kW)",
        "Daikin\n(4-7kW)",
        "LG\n(7-9kW)",
        "NIBE\n(6kW)",
        "Samsung\n(5-8kW)"
      ],
      "datasets": [
        {
          "label": "설치 면적 (m²)",
          "data": [
            0.49,
            0.51,
            0.53,
            0.6,
            0.64
          ],
          "backgroundColor": "rgba(56,189,248,.6)",
          "borderColor": "#38bdf8",
          "borderWidth": 1,
          "yAxisID": "y"
        },
        {
          "label": "무게 (kg)",
          "data": [
            114,
            109,
            182,
            95,
            113
          ],
          "backgroundColor": "rgba(251,146,60,.6)",
          "borderColor": "#fb923c",
          "borderWidth": 1,
          "yAxisID": "y1"
        }
      ]
    },
    "weightChart": {
      "labels": [
        "Vaillant\n(10-12kW)",
        "LG\n(12-16kW)",
        "Samsung\n(12-16kW)",
        "Daikin\n(8-14kW)"
      ],
      "datasets": [
        {
          "label": "설치 면적 (m²)",
          "data": [
            0.49,
            0.53,
            0.67,
            0.8
          ],
          "backgroundColor": "rgba(56,189,248,.6)",
          "borderColor": "#38bdf8",
          "borderWidth": 1,
          "yAxisID": "y"
        },
        {
          "label": "무게 (kg)",
          "data": [
            194,
            184,
            138,
            135
          ],
          "backgroundColor": "rgba(251,146,60,.6)",
          "borderColor": "#fb923c",
          "borderWidth": 1,
          "yAxisID": "y1"
        }
      ]
    },
    "featureGapRadar": {
      "labels": [
        "AI 에너지\n최적화",
        "PV/SG-Ready\n연동",
        "디스플레이\n/UX",
        "캐스케이드\n확장",
        "통합 DHW\n탱크",
        "외형\n차별화",
        "유량\n제어",
        "저소음\n기술",
        "원격진단\nTMS"
      ],
      "datasets": [
        {
          "label": "LG Therma V",
          "data": [
            3,
            6,
            5,
            9,
            6,
            4,
            10,
            10,
            8
          ],
          "backgroundColor": "rgba(239,68,68,.15)",
          "borderColor": "#ef4444",
          "borderWidth": 2,
          "pointBackgroundColor": "#ef4444"
        },
        {
          "label": "Samsung Gen7",
          "data": [
            9,
            5,
            9,
            6,
            8,
            7,
            6,
            5,
            7
          ],
          "backgroundColor": "rgba(129,140,248,.15)",
          "borderColor": "#818cf8",
          "borderWidth": 2,
          "pointBackgroundColor": "#818cf8"
        },
        {
          "label": "Daikin Altherma 4",
          "data": [
            6,
            8,
            5,
            9,
            7,
            7,
            4,
            8,
            6
          ],
          "backgroundColor": "rgba(56,189,248,.15)",
          "borderColor": "#38bdf8",
          "borderWidth": 2,
          "pointBackgroundColor": "#38bdf8"
        },
        {
          "label": "Vaillant aroTHERM+",
          "data": [
            5,
            7,
            4,
            5,
            8,
            6,
            5,
            7,
            5
          ],
          "backgroundColor": "rgba(251,146,60,.15)",
          "borderColor": "#fb923c",
          "borderWidth": 2,
          "pointBackgroundColor": "#fb923c"
        }
      ]
    }
  }
};
