TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "MainViewerVideoPlayer",
  "class": "VideoPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_t.jpg",
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "rotate": false,
      "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE",
  "cardboardMenu": {
   "class": "Menu",
   "fontFamily": "Arial",
   "rollOverOpacity": 0.8,
   "id": "Menu_1BB021D6_5A41_523A_41CA_018D7133E4AF",
   "label": "Media",
   "backgroundColor": "#404040",
   "opacity": 0.4,
   "rollOverFontColor": "#FFFFFF",
   "children": [
    {
     "class": "MenuItem",
     "label": "HOME",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "PHYTOCHEMISTRY",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "5",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "CENTRAL INSTRUMENTATION FACILITY",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "8",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "9",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "class": "MenuItem",
     "label": "10",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "class": "MenuItem",
     "label": "11",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "class": "MenuItem",
     "label": "12",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "class": "MenuItem",
     "label": "13",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "class": "MenuItem",
     "label": "micro biology",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    },
    {
     "class": "MenuItem",
     "label": "GLP",
     "click": "this.mainPlayList.set('selectedIndex', 11)"
    }
   ],
   "selectedFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "fontColor": "#FFFFFF",
   "rollOverBackgroundColor": "#000000"
  },
  "hfovMax": 120,
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "label": "HOME",
  "hfovMin": 120,
  "thumbnailUrl": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_t.jpg",
  "hfov": 360
 },
 {
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "buttonCardboardView": {
   "toolTipShadowBlurRadius": 3,
   "backgroundOpacity": 0,
   "id": "IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B",
   "maxWidth": 70,
   "toolTipOpacity": 1,
   "mode": "push",
   "maxHeight": 100,
   "shadow": false,
   "toolTipBorderSize": 1,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipTextShadowOpacity": 0,
   "toolTipPaddingTop": 4,
   "toolTipShadowColor": "#333333",
   "horizontalAlign": "center",
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontFamily": "Arial",
   "paddingLeft": 0,
   "toolTipPaddingBottom": 4,
   "toolTipFontStyle": "normal",
   "toolTipFontSize": 12,
   "toolTip": "Enable VR",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipFontColor": "#606060",
   "toolTipPaddingLeft": 6,
   "cursor": "hand",
   "paddingTop": 0,
   "minWidth": 50,
   "width": "80%",
   "minHeight": 50,
   "verticalAlign": "middle",
   "borderSize": 0,
   "borderRadius": 0,
   "toolTipBorderColor": "#767676",
   "class": "IconButton",
   "toolTipBorderRadius": 3,
   "iconURL": "skin/IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B.png",
   "toolTipFontWeight": "normal",
   "paddingRight": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingRight": 6,
   "height": "100%",
   "transparencyActive": false,
   "paddingBottom": 0,
   "toolTipShadowSpread": 0,
   "toolTipShadowOpacity": 1,
   "toolTipTextShadowColor": "#000000"
  },
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_t.jpg",
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_3B6D458C_2B0E_6F00_4137_F60375F9E4C8, null, null, 10000, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_25DA8B0C_2AFA_7B00_41C2_6A03F63F0461",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.49,
        "yaw": -170.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 96,
           "width": 118,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -41.57
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -170.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 192,
           "width": 236,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_1_0.png"
          }
         ]
        },
        "hfov": 10.49,
        "pitch": -41.57
       }
      ]
     },
     {
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "yaw": -170.64,
      "showEasing": "cubic_in",
      "rotationZ": 0,
      "id": "popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE",
      "hideEasing": "cubic_out",
      "hideDuration": 500,
      "hfov": 10.49,
      "popupMaxWidth": "65%",
      "rotationX": 0,
      "popupMaxHeight": "65%",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 640,
         "width": 1024,
         "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_2.jpg"
        }
       ]
      },
      "rotationY": 0,
      "pitch": -41.57
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33, this.camera_66F98209_5A41_5616_41A7_80421AA94DD6); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_24CAE2F7_2B0F_E500_41C4_A18761875ECF",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.3,
        "yaw": 128.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 44,
           "width": 89,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -28.55
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 128.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 88,
           "width": 178,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_3_0.png"
          }
         ]
        },
        "hfov": 9.3,
        "pitch": -28.55
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "rotate": false,
      "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "id": "overlay_70B12732_55AB_AC15_41C4_E938DA1C7449",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 40.98,
        "yaw": -170.63,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 40,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_4_0_map.gif"
          }
         ]
        },
        "pitch": -38.53
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -170.63,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 351,
           "width": 884,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_4_0.png"
          }
         ]
        },
        "hfov": 40.98,
        "pitch": -38.53
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98",
  "cardboardMenu": "this.Menu_1BB021D6_5A41_523A_41CA_018D7133E4AF",
  "hfovMax": 120,
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "label": "PHYTOCHEMISTRY",
  "hfovMin": 120,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -45.16,
    "panorama": {
     "vfov": 180,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_t.jpg",
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98, this.camera_651662B5_5A41_567E_41D5_5CCB147FD58D); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_2479695E_2B38_D0EA_41AD_DC4172FC61AB",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 14.72,
           "yaw": -45.16,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 44,
              "width": 130,
              "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -18.35
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -45.16,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 88,
              "width": 261,
              "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_0_HS_0_0.png"
             }
            ]
           },
           "hfov": 14.72,
           "pitch": -18.35
          }
         ]
        },
        {
         "class": "TripodCapPanoramaOverlay",
         "hfov": 45,
         "rotate": false,
         "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33_tcap0",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 850,
            "width": 850,
            "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
           }
          ]
         },
         "angle": 0,
         "inertia": false
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3040,
          "width": 6080,
          "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33.jpeg"
         }
        ]
       }
      }
     ],
     "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33",
     "cardboardMenu": "this.Menu_1BB021D6_5A41_523A_41CA_018D7133E4AF",
     "hfovMax": 120,
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "label": "5",
     "hfovMin": 120,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 128.9,
       "panorama": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98",
       "yaw": -45.16,
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_t.jpg",
     "hfov": 360
    },
    "yaw": 128.9,
    "distance": 1
   }
  ],
  "thumbnailUrl": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_t.jpg",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 14.65,
   "pitch": -6.12
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -6.15,
     "easing": "cubic_in_out",
     "targetYaw": 23.88,
     "yawSpeed": 33.25
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 2)",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -43.37,
     "easing": "cubic_in_out",
     "targetYaw": -168.93,
     "yawSpeed": 33.25
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": 7.45,
     "easing": "cubic_in_out",
     "targetYaw": 131.45,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 130.11,
   "pitch": -2.82
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 1)",
     "path": "shortest",
     "pitchSpeed": 22.4,
     "targetPitch": -1.18,
     "easing": "cubic_in_out",
     "targetYaw": -137.72,
     "yawSpeed": 44
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_t.jpg",
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "id": "overlay_4F20F8D9_50A5_873F_4185_24C8DB425224",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 41.52,
        "yaw": 48.71,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 195,
           "width": 200,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_4_1_0_map.gif"
          }
         ]
        },
        "pitch": -9.05
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 48.71,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 717,
           "width": 733,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_4_0.png"
          }
         ]
        },
        "hfov": 41.52,
        "pitch": -9.05
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7, this.camera_65C0F2EE_5A41_57EA_41AF_E14DCE10E68A); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_3FEDAE92_2B28_707A_41C2_E8EBF519B4F5",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.04,
        "yaw": 12.85,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 27,
           "width": 96,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -14.56
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 12.85,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 54,
           "width": 192,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_0_0.png"
          }
         ]
        },
        "hfov": 11.04,
        "pitch": -14.56
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_3F761D72_2B28_D0BA_41C3_6C15AF70AE2D",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.28,
        "yaw": 12.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 15,
           "width": 44,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -6.88
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 12.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 30,
           "width": 89,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_1_0.png"
          }
         ]
        },
        "hfov": 5.28,
        "pitch": -6.88
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "rotate": false,
      "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_654F705B_50BD_8733_41D0_F63243597D98, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_517E0847_5A3F_3219_41B6_0463EC273DB3, this.video_76330817_51F1_1E5A_41C8_BAE5158F0B37, this.PlayList_4496B293_5ACF_363A_41CA_45AEF1C278E1, '65%', '65%', true, true); this.PlayList_4496B293_5ACF_363A_41CA_45AEF1C278E1.set('selectedIndex', 0); ; this.viewer_uid474B926D_5ACF_36EE_41D3_4F44DAC9C549VideoPlayer.play();  }",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_1B37166D_50D8_881A_41D0_15E8E78F99B1",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.7,
        "yaw": 49.63,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 66,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -13.33
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 49.63,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 119,
           "width": 133,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_3_0.png"
          }
         ]
        },
        "hfov": 7.7,
        "pitch": -13.33
       }
      ]
     },
     {
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "yaw": 49.63,
      "showEasing": "cubic_in",
      "pitch": -13.33,
      "rotationZ": 0,
      "id": "popup_654F705B_50BD_8733_41D0_F63243597D98",
      "hideEasing": "cubic_out",
      "hideDuration": 500,
      "loop": false,
      "video": {
       "class": "VideoResource",
       "mp4Url": "media/video_76330817_51F1_1E5A_41C8_BAE5158F0B37.mp4",
       "height": 1080,
       "width": 1920,
       "webmUrl": "media/video_76330817_51F1_1E5A_41C8_BAE5158F0B37.webm"
      },
      "hfov": 7.7,
      "popupMaxWidth": "65%",
      "rotationX": 0,
      "popupMaxHeight": "65%",
      "rotationY": 0,
      "autoplay": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "id": "overlay_7F84E2BA_55BA_6415_41CF_752037C33378",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 37.74,
        "yaw": 48.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 15,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_5_0_map.gif"
          }
         ]
        },
        "pitch": -8.67
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 48.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 671,
           "width": 644,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_5_0.png"
          }
         ]
        },
        "hfov": 37.74,
        "pitch": -8.67
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254",
  "cardboardMenu": "this.Menu_1BB021D6_5A41_523A_41CA_018D7133E4AF",
  "hfovMax": 120,
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "label": "CENTRAL INSTRUMENTATION FACILITY",
  "hfovMin": 120,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -90.53,
    "panorama": {
     "vfov": 180,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_t.jpg",
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "useHandCursor": true,
         "id": "overlay_700D2974_50A2_F9F5_41C1_F0B652530DF3",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 47.31,
           "yaw": -156.14,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 152,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_8_1_0_map.gif"
             }
            ]
           },
           "pitch": -8.2
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "roll": 0,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -156.14,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 1108,
              "width": 847,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_8_0.png"
             }
            ]
           },
           "hfov": 47.31,
           "pitch": -8.2
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "useHandCursor": true,
         "id": "overlay_4E373B42_50A6_B90D_41C0_72107BA985FE",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 34.41,
           "yaw": 136.13,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 142,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_9_1_0_map.gif"
             }
            ]
           },
           "pitch": -8.21
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "roll": 0,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 136.13,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 840,
              "width": 599,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_9_0.png"
             }
            ]
           },
           "hfov": 34.41,
           "pitch": -8.21
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "useHandCursor": true,
         "id": "overlay_705F2532_50A7_890D_4150_A2D46E19681C",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 19.57,
           "yaw": 70.36,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 167,
              "width": 166,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_10_1_0_map.gif"
             }
            ]
           },
           "pitch": -0.24
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "roll": 0,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 70.36,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 334,
              "width": 333,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_10_0.png"
             }
            ]
           },
           "hfov": 19.57,
           "pitch": -0.24
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254, this.camera_655E828F_5A41_562A_41D3_513543FC25AD); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_3E9F6432_2B58_70BA_419F_5306AE486F84",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.85,
           "yaw": -90.53,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 29,
              "width": 97,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -20.53
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -90.53,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 58,
              "width": 195,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_0_0.png"
             }
            ]
           },
           "hfov": 10.85,
           "pitch": -20.53
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_5E84A72B_5062_8913_41D3_2E436895D709, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_4617CE97_507D_BB33_41CC_277230F4FDD7, null, null, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_3C29AFBA_2B58_4FAA_418A_EF7FAC3F6BC3",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.42,
           "yaw": -145.01,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 82,
              "width": 87,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -24.53
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -145.01,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 164,
              "width": 174,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_1_0.png"
             }
            ]
           },
           "hfov": 9.42,
           "pitch": -24.53
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283, this.camera_6533A2A2_5A41_561A_41B0_F505F051CEF1); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_3C08EAB3_2B68_71BA_41C3_88B21B58A8A3",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.86,
           "yaw": 86.03,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 25,
              "width": 85,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -12.6
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 86.03,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 50,
              "width": 170,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_2_0.png"
             }
            ]
           },
           "hfov": 9.86,
           "pitch": -12.6
          }
         ]
        },
        {
         "class": "TripodCapPanoramaOverlay",
         "hfov": 45,
         "rotate": false,
         "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_tcap0",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 850,
            "width": 850,
            "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
           }
          ]
         },
         "angle": 0,
         "inertia": false
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_65BD6281_50A2_8B0E_41D1_6A6A3A214872, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_517D4848_5A3F_3216_41A9_33DA82CBDA94, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F, this.PlayList_44953293_5ACF_363A_41BA_206C9D538AE4, '65%', '65%', true, true); this.PlayList_44953293_5ACF_363A_41BA_206C9D538AE4.set('selectedIndex', 0); ; this.viewer_uid47484270_5ACF_36F6_41AF_980166D60CCAVideoPlayer.play();  }",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_1B6D99BB_50D8_F87E_41A8_78212ADAD698",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.52,
           "yaw": 75.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 37,
              "width": 38,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_7_0_0_map.gif"
             }
            ]
           },
           "pitch": -1.82
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 75.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 74,
              "width": 76,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_7_0.png"
             }
            ]
           },
           "hfov": 4.52,
           "pitch": -1.82
          }
         ]
        },
        {
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "yaw": -145.01,
         "showEasing": "cubic_in",
         "rotationZ": 0,
         "id": "popup_5E84A72B_5062_8913_41D3_2E436895D709",
         "hideEasing": "cubic_out",
         "hideDuration": 500,
         "hfov": 9.42,
         "popupMaxWidth": "65%",
         "rotationX": 0,
         "popupMaxHeight": "65%",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 640,
            "width": 1024,
            "url": "media/popup_5E84A72B_5062_8913_41D3_2E436895D709_0_2.jpg"
           }
          ]
         },
         "rotationY": 0,
         "pitch": -24.53
        },
        {
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "yaw": 75.22,
         "showEasing": "cubic_in",
         "pitch": -1.82,
         "rotationZ": 0,
         "id": "popup_65BD6281_50A2_8B0E_41D1_6A6A3A214872",
         "hideEasing": "cubic_out",
         "hideDuration": 500,
         "loop": false,
         "video": {
          "class": "VideoResource",
          "mp4Url": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.mp4",
          "height": 1080,
          "width": 1920,
          "webmUrl": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.webm"
         },
         "hfov": 4.52,
         "popupMaxWidth": "65%",
         "rotationX": 0,
         "popupMaxHeight": "65%",
         "rotationY": 0,
         "autoplay": true
        },
        {
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "yaw": 137.93,
         "showEasing": "cubic_in",
         "pitch": -15.94,
         "rotationZ": 0,
         "id": "popup_654154AD_50A7_8F17_41CC_033E6CF6538E",
         "hideEasing": "cubic_out",
         "hideDuration": 500,
         "loop": false,
         "video": {
          "class": "VideoResource",
          "mp4Url": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.mp4",
          "height": 1080,
          "width": 1920,
          "webmUrl": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.webm"
         },
         "hfov": 6.77,
         "popupMaxWidth": "65%",
         "rotationX": 0,
         "popupMaxHeight": "65%",
         "rotationY": 0,
         "autoplay": true
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_654154AD_50A7_8F17_41CC_033E6CF6538E, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_517C9849_5A3F_3216_41AF_65BEAAA37C03, this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6, this.PlayList_4495A294_5ACF_363E_41C1_0D6452B0F865, '65%', '65%', true, true); this.PlayList_4495A294_5ACF_363E_41C1_0D6452B0F865.set('selectedIndex', 0); ; this.viewer_uid47772271_5ACF_36F6_41BF_885372D747B1VideoPlayer.play();  }",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_67818DCD_50A7_7917_41B3_206D6A17D08A",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.77,
           "yaw": 137.93,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 59,
              "width": 59,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_11_0_0_map.gif"
             }
            ]
           },
           "pitch": -15.94
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 137.93,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 119,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_11_0.png"
             }
            ]
           },
           "hfov": 6.77,
           "pitch": -15.94
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "useHandCursor": true,
         "id": "overlay_7A16AEFE_5599_BC0D_41C5_F81A67ACC610",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 61.11,
           "yaw": -161.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 15,
              "width": 16,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_12_0_map.gif"
             }
            ]
           },
           "pitch": -7.41
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -161.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 1002,
              "width": 1040,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_12_0.png"
             }
            ]
           },
           "hfov": 61.11,
           "pitch": -7.41
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "useHandCursor": true,
         "id": "overlay_6091554F_559F_EC0B_41D5_721D732FC14C",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 33.27,
           "yaw": 137.64,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 22,
              "width": 16,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_13_0_map.gif"
             }
            ]
           },
           "pitch": -8.59
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 137.64,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 786,
              "width": 568,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_13_0.png"
             }
            ]
           },
           "hfov": 33.27,
           "pitch": -8.59
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "useHandCursor": true,
         "id": "overlay_632176B1_5596_AC17_41C7_79D4D7F1A4DC",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 23.54,
           "yaw": 71.65,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 18,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_14_0_map.gif"
             }
            ]
           },
           "pitch": -0.17
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 71.65,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 337,
              "width": 397,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_14_0.png"
             }
            ]
           },
           "hfov": 23.54,
           "pitch": -0.17
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3040,
          "width": 6080,
          "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7.jpeg"
         }
        ]
       }
      }
     ],
     "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
     "cardboardMenu": "this.Menu_1BB021D6_5A41_523A_41CA_018D7133E4AF",
     "hfovMax": 120,
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "label": "8",
     "hfovMin": 120,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 12.85,
       "panorama": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254",
       "yaw": -90.53,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -89.79,
       "panorama": {
        "vfov": 180,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_t.jpg",
          "overlays": [
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "useHandCursor": true,
            "id": "overlay_4DC82B90_50A2_990D_41D2_364DA84C6CC2",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 83.7,
              "yaw": 35.97,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 132,
                 "width": 200,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_8_1_0_map.gif"
                }
               ]
              },
              "pitch": -5.37
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "roll": 0,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 35.97,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1150,
                 "width": 1733,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_8_0.png"
                }
               ]
              },
              "hfov": 83.7,
              "pitch": -5.37
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "useHandCursor": true,
            "id": "overlay_71A486BE_50BE_8B75_41CC_0933C5D197EA",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 9.57,
              "yaw": 102.3,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 63,
                 "width": 81,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_9_1_0_map.gif"
                }
               ]
              },
              "pitch": -6.19
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "roll": 0,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 102.3,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 127,
                 "width": 162,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_9_0.png"
                }
               ]
              },
              "hfov": 9.57,
              "pitch": -6.19
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "useHandCursor": true,
            "id": "overlay_4FE1B952_50BD_790D_41CE_96900BBBAB6A",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 46.53,
              "yaw": 154.43,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 200,
                 "width": 132,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_10_1_0_map.gif"
                }
               ]
              },
              "pitch": -7.57
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "roll": 0,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 154.43,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1253,
                 "width": 832,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_10_0.png"
                }
               ]
              },
              "hfov": 46.53,
              "pitch": -7.57
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB, this.camera_66BA8242_5A41_561A_41CB_46FC3B4B46C3); this.mainPlayList.set('selectedIndex', 6)",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_31185C58_2B78_B0F6_41B4_28B9C2F6EC48",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.82,
              "yaw": 86.11,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 26,
                 "width": 94,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -13.9
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 86.11,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 52,
                 "width": 188,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_1_0.png"
                }
               ]
              },
              "hfov": 10.82,
              "pitch": -13.9
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7, this.camera_66971255_5A41_563E_41AC_F7AFEF999DF1); this.mainPlayList.set('selectedIndex', 4)",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_31B9ED69_2B68_D0D6_41BA_E574FC153520",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 13.74,
              "yaw": -89.79,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 44,
                 "width": 130,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "pitch": -27.59
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -89.79,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 88,
                 "width": 261,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_4_0.png"
                }
               ]
              },
              "hfov": 13.74,
              "pitch": -27.59
             }
            ]
           },
           {
            "class": "TripodCapPanoramaOverlay",
            "hfov": 45,
            "rotate": false,
            "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_tcap0",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 850,
               "width": 850,
               "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
              }
             ]
            },
            "angle": 0,
            "inertia": false
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_65155EA1_50A6_9B0F_41A2_DA50D7C2A9FC, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_51012845_5A3F_321E_41C4_265C652FA0A7, this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6, this.PlayList_44941294_5ACF_363E_41BC_A407C4D29F48, '65%', '65%', true, true); this.PlayList_44941294_5ACF_363E_41BC_A407C4D29F48.set('selectedIndex', 0); ; this.viewer_uid47759274_5ACF_36FE_4199_106E91397DCEVideoPlayer.play();  }",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_1B537871_50DB_B80A_41BB_6691B31B4B6D",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.31,
              "yaw": 150.4,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 94,
                 "width": 96,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_5_0_0_map.gif"
                }
               ]
              },
              "pitch": -25.31
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 150.4,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 188,
                 "width": 192,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_5_0.png"
                }
               ]
              },
              "hfov": 10.31,
              "pitch": -25.31
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6A02F7F5_50A2_88F7_41CF_48C2226BE573, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_5101D846_5A3F_321A_41D2_77598A77A92F, this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496, this.PlayList_44949295_5ACF_363E_41BB_22F293FFE37C, '65%', '65%', true, true); this.PlayList_44949295_5ACF_363E_41BB_22F293FFE37C.set('selectedIndex', 0); ; this.viewer_uid47743275_5ACF_36FE_41C4_D2D02E415514VideoPlayer.play();  }",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_1B004E27_50DB_F816_41C7_2B709D4218B7",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.75,
              "yaw": 101.85,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 44,
                 "width": 40,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_6_0_0_map.gif"
                }
               ]
              },
              "pitch": -6.66
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 101.85,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 88,
                 "width": 80,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_6_0.png"
                }
               ]
              },
              "hfov": 4.75,
              "pitch": -6.66
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_67FA235E_50A5_8935_41D0_DC909E301520, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_5100B847_5A3F_321A_41D5_3B2A82F5D79B, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F, this.PlayList_44930296_5ACF_363A_41B1_8687521C9DB5, '65%', '65%', true, true); this.PlayList_44930296_5ACF_363A_41B1_8687521C9DB5.set('selectedIndex', 0); ; this.viewer_uid4774B275_5ACF_36F9_41CE_B55613342D55VideoPlayer.play();  }",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_1C1EDF6C_50DB_B81B_417E_8CD5BB4FD66B",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 6.86,
              "yaw": 48.94,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 59,
                 "width": 59,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_7_0_0_map.gif"
                }
               ]
              },
              "pitch": -13.07
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 48.94,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 119,
                 "width": 119,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_7_0.png"
                }
               ]
              },
              "hfov": 6.86,
              "pitch": -13.07
             }
            ]
           },
           {
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "yaw": 150.4,
            "showEasing": "cubic_in",
            "pitch": -25.31,
            "rotationZ": 0,
            "id": "popup_65155EA1_50A6_9B0F_41A2_DA50D7C2A9FC",
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "loop": false,
            "video": {
             "class": "VideoResource",
             "mp4Url": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.mp4",
             "height": 1080,
             "width": 1920,
             "webmUrl": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.webm"
            },
            "hfov": 10.31,
            "popupMaxWidth": "65%",
            "rotationX": 0,
            "popupMaxHeight": "65%",
            "rotationY": 0,
            "autoplay": true
           },
           {
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "yaw": 48.94,
            "showEasing": "cubic_in",
            "pitch": -13.07,
            "rotationZ": 0,
            "id": "popup_67FA235E_50A5_8935_41D0_DC909E301520",
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "loop": false,
            "video": {
             "class": "VideoResource",
             "mp4Url": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.mp4",
             "height": 1080,
             "width": 1920,
             "webmUrl": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.webm"
            },
            "hfov": 6.86,
            "popupMaxWidth": "65%",
            "rotationX": 0,
            "popupMaxHeight": "65%",
            "rotationY": 0,
            "autoplay": true
           },
           {
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "yaw": 101.85,
            "showEasing": "cubic_in",
            "pitch": -6.66,
            "rotationZ": 0,
            "id": "popup_6A02F7F5_50A2_88F7_41CF_48C2226BE573",
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "loop": false,
            "video": {
             "class": "VideoResource",
             "mp4Url": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.mp4",
             "height": 1080,
             "width": 1920,
             "webmUrl": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.webm"
            },
            "hfov": 4.75,
            "popupMaxWidth": "65%",
            "rotationX": 0,
            "popupMaxHeight": "65%",
            "rotationY": 0,
            "autoplay": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "useHandCursor": true,
            "id": "overlay_604B53F8_556A_6415_41C6_A6A76CC85C61",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 83.97,
              "yaw": 36.65,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 16,
                 "width": 31,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_11_0_map.gif"
                }
               ]
              },
              "pitch": -6.19
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 36.65,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 728,
                 "width": 1426,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_11_0.png"
                }
               ]
              },
              "hfov": 83.97,
              "pitch": -6.19
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "useHandCursor": true,
            "id": "overlay_11F39650_556B_EC15_41C6_67197B84684D",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 44.66,
              "yaw": 154.63,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 23,
                 "width": 16,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_12_0_map.gif"
                }
               ]
              },
              "pitch": -6.8
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 154.63,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1105,
                 "width": 759,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_12_0.png"
                }
               ]
              },
              "hfov": 44.66,
              "pitch": -6.8
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "useHandCursor": true,
            "id": "overlay_1C751C7D_5576_7C0F_41C1_79D06A2F7978",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 12.43,
              "yaw": 101.59,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 16,
                 "width": 19,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_13_0_map.gif"
                }
               ]
              },
              "pitch": -4.14
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 101.59,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 173,
                 "width": 210,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_13_0.png"
                }
               ]
              },
              "hfov": 12.43,
              "pitch": -4.14
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3040,
             "width": 6080,
             "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283.jpeg"
            }
           ]
          }
         }
        ],
        "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
        "cardboardMenu": "this.Menu_1BB021D6_5A41_523A_41CA_018D7133E4AF",
        "hfovMax": 120,
        "partial": false,
        "pitch": 0,
        "class": "Panorama",
        "label": "9",
        "hfovMin": 120,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 158.9,
          "panorama": {
           "vfov": 180,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_t.jpg",
             "overlays": [
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": true,
               "useHandCursor": true,
               "id": "overlay_4B34AF87_50A2_F913_41CE_9C309C78BCE3",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 30.09,
                 "yaw": 139.67,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 71,
                    "width": 200,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_4_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -8.48
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "roll": 0,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 139.67,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 187,
                    "width": 520,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_4_0.png"
                   }
                  ]
                 },
                 "hfov": 30.09,
                 "pitch": -8.48
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283, this.camera_6578227C_5A41_56EE_41D5_E28D34241B18); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "id": "overlay_35AAC376_2B68_D0BA_41BB_7923190EDEF6",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 11.36,
                 "yaw": 158.9,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 31,
                    "width": 104,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -23.27
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 158.9,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 63,
                    "width": 208,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_1_0.png"
                   }
                  ]
                 },
                 "hfov": 11.36,
                 "pitch": -23.27
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3, this.camera_668E6268_5A41_5616_41D5_365C4613E2F6); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "id": "overlay_35999D8F_2B69_B069_41A3_BFD7D3419C03",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 13.63,
                 "yaw": -140.96,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 44,
                    "width": 130,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -28.46
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -140.96,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 88,
                    "width": 261,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_2_0.png"
                   }
                  ]
                 },
                 "hfov": 13.63,
                 "pitch": -28.46
                }
               ]
              },
              {
               "class": "TripodCapPanoramaOverlay",
               "hfov": 45,
               "rotate": false,
               "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_tcap0",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 850,
                  "width": 850,
                  "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                 }
                ]
               },
               "angle": 0,
               "inertia": false
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_66D14DEA_50A2_F91D_41C8_77D742AED913, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_51023844_5A3F_321E_41C6_3CACE063EE0A, this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496, this.PlayList_44938296_5ACF_363A_41C0_98BEE675BACD, '95%', '95%', true, true); this.PlayList_44938296_5ACF_363A_41C0_98BEE675BACD.set('selectedIndex', 0); ; this.viewer_uid47711279_5ACF_36F6_41CE_234C7A186538VideoPlayer.play();  }",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "id": "overlay_1DDF29D8_50D8_B83A_41D0_BAC83EF14B05",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 6.74,
                 "yaw": 147.92,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 57,
                    "width": 57,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -6.49
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 147.92,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 114,
                    "width": 114,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_3_0.png"
                   }
                  ]
                 },
                 "hfov": 6.74,
                 "pitch": -6.49
                }
               ]
              },
              {
               "showDuration": 500,
               "class": "PopupPanoramaOverlay",
               "yaw": 147.92,
               "showEasing": "cubic_in",
               "pitch": -6.49,
               "rotationZ": 0,
               "id": "popup_66D14DEA_50A2_F91D_41C8_77D742AED913",
               "hideEasing": "cubic_out",
               "hideDuration": 500,
               "loop": false,
               "video": {
                "class": "VideoResource",
                "mp4Url": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.mp4",
                "height": 1080,
                "width": 1920,
                "webmUrl": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.webm"
               },
               "hfov": 6.74,
               "popupMaxWidth": "95%",
               "rotationX": 0,
               "popupMaxHeight": "95%",
               "rotationY": 0,
               "autoplay": true
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": true,
               "useHandCursor": true,
               "id": "overlay_1E0E8B5C_5579_A40D_41B3_4D2DA6A0E55F",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 29,
                 "yaw": 139.29,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 16,
                    "width": 48,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_5_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -8.06
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 139.29,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 164,
                    "width": 494,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_5_0.png"
                   }
                  ]
                 },
                 "hfov": 29,
                 "pitch": -8.06
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3040,
                "width": 6080,
                "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB.jpeg"
               }
              ]
             }
            }
           ],
           "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
           "cardboardMenu": "this.Menu_1BB021D6_5A41_523A_41CA_018D7133E4AF",
           "hfovMax": 120,
           "partial": false,
           "pitch": 0,
           "class": "Panorama",
           "label": "10",
           "hfovMin": 120,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 99.8,
             "panorama": {
              "vfov": 180,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_t.jpg",
                "overlays": [
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB, this.camera_650A42C7_5A41_561A_41AD_73690E3A3CA4); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1A3D2BE2_2B3B_F7DA_41B0_43BE97FE8F12",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 13.67,
                    "yaw": 99.8,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 44,
                       "width": 130,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_6_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -28.11
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 99.8,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 88,
                       "width": 261,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_6_0.png"
                      }
                     ]
                    },
                    "hfov": 13.67,
                    "pitch": -28.11
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B, this.camera_65EE62DA_5A41_562A_41CF_B88273E76BA7); this.mainPlayList.set('selectedIndex', 8)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1AB8B966_2B38_70DB_41B4_EE57D7A8147E",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.7,
                    "yaw": -95.11,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 27,
                       "width": 102,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_7_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -28.68
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -95.11,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 54,
                       "width": 205,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_7_0.png"
                      }
                     ]
                    },
                    "hfov": 10.7,
                    "pitch": -28.68
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 9)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_18D981A3_2B28_F05A_41B7_CFB6BC709F32",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.04,
                    "yaw": -92.84,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 14,
                       "width": 44,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_8_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -14.95
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -92.84,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 29,
                       "width": 88,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_8_0.png"
                      }
                     ]
                    },
                    "hfov": 5.04,
                    "pitch": -14.95
                   }
                  ]
                 },
                 {
                  "class": "TripodCapPanoramaOverlay",
                  "hfov": 45,
                  "rotate": false,
                  "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_tcap0",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 850,
                     "width": 850,
                     "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                    }
                   ]
                  },
                  "angle": 0,
                  "inertia": false
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": true,
                  "useHandCursor": true,
                  "id": "overlay_024F0E0F_5696_BC0B_41D1_5B7597DBDC1C",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 27.06,
                    "yaw": -54.35,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 200,
                       "width": 168,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_11_1_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -13.03
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "roll": 0,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -54.35,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 553,
                       "width": 465,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_11_0.png"
                      }
                     ]
                    },
                    "hfov": 27.06,
                    "pitch": -13.03
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.showPopupPanoramaOverlay(this.popup_19B07CA2_569A_9C35_41C1_C421D3075B18, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_2D7F042F_56B9_AC0A_41C5_A957BBD74718, null, null, null, null, false)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_181AEE71_569A_9C17_41A1_24B8AF035558",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 8.04,
                    "yaw": -53.75,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 68,
                       "width": 68,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_12_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -6.36
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -53.75,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 136,
                       "width": 136,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_12_0.png"
                      }
                     ]
                    },
                    "hfov": 8.04,
                    "pitch": -6.36
                   }
                  ]
                 },
                 {
                  "showDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "yaw": -53.75,
                  "showEasing": "cubic_in",
                  "rotationZ": 0,
                  "id": "popup_19B07CA2_569A_9C35_41C1_C421D3075B18",
                  "hideEasing": "cubic_out",
                  "hideDuration": 500,
                  "hfov": 8.04,
                  "popupMaxWidth": "45%",
                  "rotationX": 0,
                  "popupMaxHeight": "45%",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 640,
                     "width": 1024,
                     "url": "media/popup_19B07CA2_569A_9C35_41C1_C421D3075B18_0_2.jpg"
                    }
                   ]
                  },
                  "rotationY": 0,
                  "pitch": -6.36
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": true,
                  "useHandCursor": true,
                  "id": "overlay_06CE67FE_569B_AC0D_41BC_CE75F7D68477",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 28.51,
                    "yaw": -54.35,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 18,
                       "width": 16,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_13_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -13.95
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -54.35,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 575,
                       "width": 496,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_13_0.png"
                      }
                     ]
                    },
                    "hfov": 28.51,
                    "pitch": -13.95
                   }
                  ]
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3040,
                   "width": 6080,
                   "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3.jpeg"
                  }
                 ]
                }
               }
              ],
              "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
              "cardboardMenu": "this.Menu_1BB021D6_5A41_523A_41CA_018D7133E4AF",
              "hfovMax": 120,
              "partial": false,
              "pitch": 0,
              "class": "Panorama",
              "label": "11",
              "hfovMin": 120,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -140.96,
                "panorama": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
                "yaw": 99.8,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 85.77,
                "panorama": {
                 "vfov": 180,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_t.jpg",
                   "overlays": [
                    {
                     "class": "TripodCapPanoramaOverlay",
                     "hfov": 45,
                     "rotate": false,
                     "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B_tcap0",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 850,
                        "width": 850,
                        "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                       }
                      ]
                     },
                     "angle": 0,
                     "inertia": false
                    },
                    {
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": -34.31,
                     "showEasing": "cubic_in",
                     "rotationZ": 0,
                     "id": "popup_0690991F_50C8_9836_41B5_3F1A35404AF0",
                     "hideEasing": "cubic_out",
                     "hideDuration": 500,
                     "hfov": 6,
                     "popupMaxWidth": "65%",
                     "rotationX": 0,
                     "popupMaxHeight": "65%",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 640,
                        "width": 1024,
                        "url": "media/popup_0690991F_50C8_9836_41B5_3F1A35404AF0_0_2.jpg"
                       }
                      ]
                     },
                     "rotationY": 0,
                     "pitch": -31.55
                    },
                    {
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": -74.75,
                     "showEasing": "cubic_in",
                     "rotationZ": 0,
                     "id": "popup_0375FAC7_50CF_F816_41A2_8895EB06B570",
                     "hideEasing": "cubic_out",
                     "hideDuration": 500,
                     "hfov": 4.37,
                     "popupMaxWidth": "65%",
                     "rotationX": 0,
                     "popupMaxHeight": "65%",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 640,
                        "width": 1024,
                        "url": "media/popup_0375FAC7_50CF_F816_41A2_8895EB06B570_0_2.jpg"
                       }
                      ]
                     },
                     "rotationY": 0,
                     "pitch": -9.15
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "useHandCursor": true,
                     "id": "overlay_4867AA68_5062_BB1D_41BF_C26299F50422",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 30.37,
                       "yaw": -150.57,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 141,
                          "width": 200,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_11_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -14.57
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "roll": 0,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -150.57,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 373,
                          "width": 525,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_11_0.png"
                         }
                        ]
                       },
                       "hfov": 30.37,
                       "pitch": -14.57
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "useHandCursor": true,
                     "id": "overlay_48558740_505D_890D_41B6_2F030622A51A",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 28.98,
                       "yaw": -33.09,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 146,
                          "width": 200,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_12_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -25.53
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "roll": 0,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -33.09,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 366,
                          "width": 500,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_12_0.png"
                         }
                        ]
                       },
                       "hfov": 28.98,
                       "pitch": -25.53
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "useHandCursor": true,
                     "id": "overlay_484C769E_505F_8B35_41BB_C7F774ED6BF5",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 22.4,
                       "yaw": -76.02,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 116,
                          "width": 191,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_13_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -12.46
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "roll": 0,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -76.02,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 232,
                          "width": 383,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_13_0.png"
                         }
                        ]
                       },
                       "hfov": 22.4,
                       "pitch": -12.46
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "useHandCursor": true,
                     "id": "overlay_478F55C9_50A2_891F_41CF_19F27DE6B1BE",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 70.36,
                       "yaw": 131.05,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 112,
                          "width": 200,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_14_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -5.96
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "roll": 0,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 131.05,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 766,
                          "width": 1364,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_14_0.png"
                         }
                        ]
                       },
                       "hfov": 70.36,
                       "pitch": -5.96
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_673AFF1D_50AD_B937_41CD_D84791F4B91A, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_51031842_5A3F_321A_41D2_717FC79A1F02, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F, this.PlayList_4493F297_5ACF_363A_41B1_59CFE336EFFB, '95%', '95%', true, true); this.PlayList_4493F297_5ACF_363A_41B1_59CFE336EFFB.set('selectedIndex', 0); ; this.viewer_uid477D327D_5ACF_36EE_41D4_4F470287D972VideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_4720C492_506F_8F0D_41CE_57EC0985FAAA",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.9,
                       "yaw": 123.46,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_10_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -11.76
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 123.46,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_10_0.png"
                         }
                        ]
                       },
                       "hfov": 6.9,
                       "pitch": -11.76
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6AC20B05_50AE_F917_41AF_5EBBE7A3AAC3, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_51035843_5A3F_321A_41D3_9FC65298B8BE, this.video_76174C24_51F1_167E_41CF_523D5490D758, this.PlayList_44928298_5ACF_3636_41BC_CDA4FCADFB88, '65%', '65%', true, true); this.PlayList_44928298_5ACF_3636_41BC_CDA4FCADFB88.set('selectedIndex', 0); ; this.viewer_uid477DE27E_5ACF_36EA_416E_7E4AEF28DAEAVideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_5E157E3E_5065_9B75_41CA_60C9EAA501D8",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.93,
                       "yaw": -146.58,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_9_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -10.28
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -146.58,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_9_0.png"
                         }
                        ]
                       },
                       "hfov": 6.93,
                       "pitch": -10.28
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB, this.camera_66C1D22F_5A41_566A_41BD_17A0745CB23C); this.mainPlayList.set('selectedIndex', 9)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_6B17C17C_2B6B_B0AE_41A3_BBAAB5D8D8B2",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 11.18,
                       "yaw": -104.48,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 27,
                          "width": 102,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_8_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -22.58
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -104.48,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 54,
                          "width": 204,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_8_0.png"
                         }
                        ]
                       },
                       "hfov": 11.18,
                       "pitch": -22.58
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3, this.camera_66D4E21B_5A41_562A_41C5_0A6008D4199D); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_6AE36307_2B69_F05A_41C0_F5F22EC988E1",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 13.35,
                       "yaw": 85.77,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 33,
                          "width": 117,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_7_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -16.65
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 85.77,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 66,
                          "width": 235,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_7_0.png"
                         }
                        ]
                       },
                       "hfov": 13.35,
                       "pitch": -16.65
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupPanoramaOverlay(this.popup_0375FAC7_50CF_F816_41A2_8895EB06B570, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_47E090CC_5062_8715_41B8_632E16047E40, null, null, null, null, false)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_19088C1E_2B58_506A_41C1_5D847567D393",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.37,
                       "yaw": -74.75,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 41,
                          "width": 37,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -9.15
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -74.75,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 83,
                          "width": 74,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_1_0.png"
                         }
                        ]
                       },
                       "hfov": 4.37,
                       "pitch": -9.15
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupPanoramaOverlay(this.popup_0690991F_50C8_9836_41B5_3F1A35404AF0, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_47E190CB_5062_8713_41B0_E16DED267F7E, null, null, null, null, false)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_185C2515_2B58_D07E_41A1_5BD0044513B5",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6,
                       "yaw": -34.31,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -31.55
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -34.31,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_0_0.png"
                         }
                        ]
                       },
                       "hfov": 6,
                       "pitch": -31.55
                      }
                     ]
                    },
                    {
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": -146.58,
                     "showEasing": "cubic_in",
                     "pitch": -10.28,
                     "rotationZ": 0,
                     "id": "popup_6AC20B05_50AE_F917_41AF_5EBBE7A3AAC3",
                     "hideEasing": "cubic_out",
                     "hideDuration": 500,
                     "loop": false,
                     "video": {
                      "class": "VideoResource",
                      "mp4Url": "media/video_76174C24_51F1_167E_41CF_523D5490D758.mp4",
                      "height": 1080,
                      "width": 1920,
                      "webmUrl": "media/video_76174C24_51F1_167E_41CF_523D5490D758.webm"
                     },
                     "hfov": 6.93,
                     "popupMaxWidth": "65%",
                     "rotationX": 0,
                     "popupMaxHeight": "65%",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": 123.46,
                     "showEasing": "cubic_in",
                     "pitch": -11.76,
                     "rotationZ": 0,
                     "id": "popup_673AFF1D_50AD_B937_41CD_D84791F4B91A",
                     "hideEasing": "cubic_out",
                     "hideDuration": 500,
                     "loop": false,
                     "video": {
                      "class": "VideoResource",
                      "mp4Url": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.mp4",
                      "height": 1080,
                      "width": 1920,
                      "webmUrl": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.webm"
                     },
                     "hfov": 6.9,
                     "popupMaxWidth": "95%",
                     "rotationX": 0,
                     "popupMaxHeight": "95%",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "useHandCursor": true,
                     "id": "overlay_0307122E_5696_E40D_41D3_2741A1A4E18C",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 28.17,
                       "yaw": -32.56,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 16,
                          "width": 23,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_15_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -25.15
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -32.56,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 359,
                          "width": 525,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_15_0.png"
                         }
                        ]
                       },
                       "hfov": 28.17,
                       "pitch": -25.15
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "useHandCursor": true,
                     "id": "overlay_0AAD43D2_56AA_A415_41D4_708A8855CC7E",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 30.1,
                       "yaw": -150.93,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 16,
                          "width": 28,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_16_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -13.38
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -150.93,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 294,
                          "width": 522,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_16_0.png"
                         }
                        ]
                       },
                       "hfov": 30.1,
                       "pitch": -13.38
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "useHandCursor": true,
                     "id": "overlay_33D41721_56AE_EC37_41C2_E1FC27E961F7",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 69.37,
                       "yaw": 130.84,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 16,
                          "width": 39,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_17_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -4.27
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 130.84,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 481,
                          "width": 1174,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_17_0.png"
                         }
                        ]
                       },
                       "hfov": 69.37,
                       "pitch": -4.27
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "useHandCursor": true,
                     "id": "overlay_328D4ED9_56AB_9C17_41D0_3ED0B653A221",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 22.73,
                       "yaw": -74.83,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 16,
                          "width": 27,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_18_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -12.42
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -74.83,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 232,
                          "width": 393,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_18_0.png"
                         }
                        ]
                       },
                       "hfov": 22.73,
                       "pitch": -12.42
                      }
                     ]
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 3040,
                      "width": 6080,
                      "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
                 "cardboardMenu": "this.Menu_1BB021D6_5A41_523A_41CA_018D7133E4AF",
                 "hfovMax": 120,
                 "partial": false,
                 "pitch": 0,
                 "class": "Panorama",
                 "label": "12",
                 "hfovMin": 120,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -95.11,
                   "panorama": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
                   "yaw": 85.77,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 97.27,
                   "panorama": {
                    "vfov": 180,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_t.jpg",
                      "overlays": [
                       {
                        "class": "TripodCapPanoramaOverlay",
                        "hfov": 45,
                        "rotate": false,
                        "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_tcap0",
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "height": 850,
                           "width": 850,
                           "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                          }
                         ]
                        },
                        "angle": 0,
                        "inertia": false
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": true,
                        "useHandCursor": true,
                        "id": "overlay_4CE89025_50AD_8717_41D1_2E46E1B20F01",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 49.75,
                          "yaw": 34.17,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 144,
                             "width": 200,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_5_1_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -29.38
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "roll": 0,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 34.17,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 646,
                             "width": 897,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_5_0.png"
                            }
                           ]
                          },
                          "hfov": 49.75,
                          "pitch": -29.38
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.showPopupPanoramaOverlay(this.popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_47E390D7_5062_8733_41D3_D5B5D084F5CB, null, null, null, null, false)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_6928B388_2B78_B06C_41B5_18CB7580BD03",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.43,
                          "yaw": 35.64,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 64,
                             "width": 66,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -18.34
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 35.64,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 129,
                             "width": 132,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_1_0.png"
                            }
                           ]
                          },
                          "hfov": 7.43,
                          "pitch": -18.34
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B, this.camera_65A2D301_5A41_5616_41D2_375303657A38); this.mainPlayList.set('selectedIndex', 8)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_693DF350_2B78_D0F6_41B0_DB0ADA44B1DD",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 13.58,
                          "yaw": 97.27,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 44,
                             "width": 130,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_3_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -28.81
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 97.27,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 88,
                             "width": 261,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_3_0.png"
                            }
                           ]
                          },
                          "hfov": 13.58,
                          "pitch": -28.81
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_69FB3384_2B78_B05E_41B7_FF964E937B13",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 11.37,
                          "yaw": -129.67,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 33,
                             "width": 105,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_4_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -24.1
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -129.67,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 67,
                             "width": 210,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_4_0.png"
                            }
                           ]
                          },
                          "hfov": 11.37,
                          "pitch": -24.1
                         }
                        ]
                       },
                       {
                        "showDuration": 500,
                        "class": "PopupPanoramaOverlay",
                        "yaw": 35.64,
                        "showEasing": "cubic_in",
                        "rotationZ": 0,
                        "id": "popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE",
                        "hideEasing": "cubic_out",
                        "hideDuration": 500,
                        "hfov": 7.43,
                        "popupMaxWidth": "65%",
                        "rotationX": 0,
                        "popupMaxHeight": "65%",
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "height": 640,
                           "width": 1024,
                           "url": "media/popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE_0_2.jpg"
                          }
                         ]
                        },
                        "rotationY": 0,
                        "pitch": -18.34
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": true,
                        "useHandCursor": true,
                        "id": "overlay_3BDDA151_56B7_E417_41D3_9E722758A972",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 45.04,
                          "yaw": 33.73,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 23,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_7_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -28.15
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 33.73,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 599,
                             "width": 862,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_7_0.png"
                            }
                           ]
                          },
                          "hfov": 45.04,
                          "pitch": -28.15
                         }
                        ]
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 3040,
                         "width": 6080,
                         "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB",
                    "cardboardMenu": "this.Menu_1BB021D6_5A41_523A_41CA_018D7133E4AF",
                    "hfovMax": 120,
                    "partial": false,
                    "pitch": 0,
                    "class": "Panorama",
                    "label": "13",
                    "hfovMin": 120,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -104.48,
                      "panorama": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
                      "yaw": 97.27,
                      "distance": 1
                     }
                    ],
                    "thumbnailUrl": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_t.jpg",
                    "hfov": 360
                   },
                   "yaw": -104.48,
                   "distance": 1
                  }
                 ],
                 "thumbnailUrl": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_t.jpg",
                 "hfov": 360
                },
                "yaw": -95.11,
                "distance": 1
               }
              ],
              "thumbnailUrl": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_t.jpg",
              "hfov": 360
             },
             "yaw": -140.96,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 86.11,
             "panorama": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
             "yaw": 158.9,
             "distance": 1
            }
           ],
           "thumbnailUrl": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_t.jpg",
           "hfov": 360
          },
          "yaw": 86.11,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 86.03,
          "panorama": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
          "yaw": -89.79,
          "distance": 1
         }
        ],
        "thumbnailUrl": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_t.jpg",
        "hfov": 360
       },
       "yaw": 86.03,
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_t.jpg",
     "hfov": 360
    },
    "yaw": 12.85,
    "distance": 1
   }
  ],
  "thumbnailUrl": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_t.jpg",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 42.81,
   "pitch": -11.51
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 4)",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -1.35,
     "easing": "cubic_in_out",
     "targetYaw": -26.5,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -143.38,
   "pitch": -17.19
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -12.25,
     "easing": "cubic_in_out",
     "targetYaw": 129.44,
     "yawSpeed": 33.25
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": 105.73,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -2.48,
     "easing": "cubic_in_out",
     "targetYaw": 74,
     "yawSpeed": 33.25
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 5)",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -1.53,
     "easing": "cubic_in_out",
     "targetYaw": 86.03,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 146.25,
   "pitch": -22.61
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -9.72,
     "easing": "cubic_in_out",
     "targetYaw": 109.66,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 9.56,
     "targetPitch": -5.1,
     "easing": "cubic_in_out",
     "targetYaw": 99.81,
     "yawSpeed": 18.2
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -5.45,
     "easing": "cubic_in_out",
     "targetYaw": 63.28,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 6)",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -10.94,
     "easing": "cubic_in_out",
     "targetYaw": 6.8,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 111.34,
   "pitch": -1.19
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -2.48,
     "easing": "cubic_in_out",
     "targetYaw": 171.02,
     "yawSpeed": 33.25
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 7)",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -4.14,
     "easing": "cubic_in_out",
     "targetYaw": -143.83,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -129.18,
   "pitch": -6.21
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -3.44,
     "easing": "cubic_in_out",
     "targetYaw": -105.73,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -5.45,
     "easing": "cubic_in_out",
     "targetYaw": -85.95,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 8.49,
     "targetPitch": -8.93,
     "easing": "cubic_in_out",
     "targetYaw": -75.23,
     "yawSpeed": 16.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 8)",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -11.99,
     "easing": "cubic_in_out",
     "targetYaw": -61.71,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 155.54,
   "pitch": -10.32
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 8.49,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": -174.16,
     "yawSpeed": 16.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 9.56,
     "targetPitch": -11.55,
     "easing": "cubic_in_out",
     "targetYaw": -141.91,
     "yawSpeed": 18.2
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 8.49,
     "targetPitch": -5.01,
     "easing": "cubic_in_out",
     "targetYaw": -121.16,
     "yawSpeed": 16.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -10.5,
     "easing": "cubic_in_out",
     "targetYaw": -85.77,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 9)",
     "path": "shortest",
     "pitchSpeed": 9.56,
     "targetPitch": -26.63,
     "easing": "cubic_in_out",
     "targetYaw": -37.83,
     "yawSpeed": 18.2
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 45.58,
   "pitch": -28.38
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 10.63,
     "targetPitch": -7.98,
     "easing": "cubic_in_out",
     "targetYaw": 74.7,
     "yawSpeed": 20.35
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 10.63,
     "targetPitch": -6.49,
     "easing": "cubic_in_out",
     "targetYaw": 125.43,
     "yawSpeed": 20.35
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 3)",
     "path": "shortest",
     "pitchSpeed": 7.42,
     "targetPitch": -10.94,
     "easing": "cubic_in_out",
     "targetYaw": 162.83,
     "yawSpeed": 13.9
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C_t.jpg"
   }
  ],
  "id": "panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C",
  "cardboardMenu": "this.Menu_1BB021D6_5A41_523A_41CA_018D7133E4AF",
  "hfovMax": 120,
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "label": "micro biology",
  "hfovMin": 120,
  "thumbnailUrl": "media/panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C_t.jpg",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "vfov": 180,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49_t.jpg"
   }
  ],
  "id": "panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49",
  "cardboardMenu": "this.Menu_1BB021D6_5A41_523A_41CA_018D7133E4AF",
  "hfovMax": 120,
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "label": "GLP",
  "hfovMin": 120,
  "thumbnailUrl": "media/panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49_t.jpg",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F', this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.get('visible')); this.registerKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F', this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.get('visible')); this.registerKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D', this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.get('visible')); this.registerKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D', this.Container_3FB65883_2894_7124_41B7_81A73B20B38D.get('visible')); this.registerKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452', this.Image_227442D1_2F53_0813_41B3_7271F7D70452.get('visible')); this.registerKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03', this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.get('visible')); this.registerKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0', this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0.get('visible')); this.registerKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6', this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6.get('visible')); this.registerKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0', this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, 500, this.effect_66A993C7_2B68_57DA_41B2_04B39F4CD777, 'showEffect', false); this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, true, -1, this.effect_5C8C0876_400D_056C_4197_4D21DD837174, 'showEffect', false); this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, -1, this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018, 'showEffect', false); this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); this.setComponentVisibility(this.Image_227442D1_2F53_0813_41B3_7271F7D70452, true, -1, this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69, 'showEffect', false); this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7646B174_4217_6060_41B9_177997DC3A13, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E00948A_556A_ECF5_41D0_CA74D0EF60E9, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_4C3F9A90_5161_25ED_41CA_C5B4E91434E4, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_02AE32EF_5065_8B13_41CC_5B661BAA48A8, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_778DEF13_553A_895E_41C7_531A1BBC730F, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_778C5F13_553A_895E_41C3_5DFDD9378F1A, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_778C2F14_553A_895A_41BA_F8C3C2D139FB, 'showEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_412FD659_5507_FBCA_41C7_2E3CE75E45C5, 'showEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_778F4F15_553A_895A_41CF_3DECCD75F153, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_778FDF15_553A_895A_41B6_9A7094958640, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_778FEF16_553A_8946_41CA_99E4CF26B253, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_778E1F16_553A_8946_4194_90289CC41BB5, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC, 'hideEffect', false)",
    "camera": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); if(this.existsKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0')){ if(this.getKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0')) { this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, true, -1, this.effect_5C8C0876_400D_056C_4197_4D21DD837174, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, false, -1, this.effect_6595C30B_5A41_562A_4175_5894CE26D6C4, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0'); if(this.existsKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')){ if(this.getKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')) { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, -1, this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018, 'showEffect', false); } else { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, false, -1, this.effect_6595730B_5A41_562A_41BB_AE7935CD39A3, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6'); if(this.existsKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')){ if(this.getKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')) { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); } else { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, false, -1, this.effect_6595630C_5A41_562E_41D6_7FCFB550AB4E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0'); if(this.existsKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')){ if(this.getKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')) { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, false, -1, this.effect_6592F30C_5A41_562E_41C7_25C412C7B406, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03'); if(this.existsKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452')){ if(this.getKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452')) { this.setComponentVisibility(this.Image_227442D1_2F53_0813_41B3_7271F7D70452, true, -1, this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69, 'showEffect', false); } else { this.setComponentVisibility(this.Image_227442D1_2F53_0813_41B3_7271F7D70452, false, -1, this.effect_6595A30D_5A41_562E_41C3_B75E0EDE8D73, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452'); if(this.existsKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')){ if(this.getKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')) { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, false, -1, this.effect_6595830D_5A41_562E_41D3_D1ECEB4E4E57, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D'); if(this.existsKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')){ if(this.getKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')) { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, false, -1, this.effect_6595330D_5A41_562E_41B8_455D9D27886F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D'); if(this.existsKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')){ if(this.getKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')) { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); } else { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, false, -1, this.effect_6595630E_5A41_562A_41C4_75903EEBF489, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F'); if(this.existsKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')){ if(this.getKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')) { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, false, -1, this.effect_6592A30E_5A41_562A_41B4_11643E024CD6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_6592E30E_5A41_562A_41D2_E9152419697D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7646B174_4217_6060_41B9_177997DC3A13, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_02AE32EF_5065_8B13_41CC_5B661BAA48A8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_6592130F_5A41_562A_41D5_353AA0B2592C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_6593B30F_5A41_562A_41A4_BE9661C0D705, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_778DEF13_553A_895E_41C7_531A1BBC730F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_65939310_5A41_5636_41C7_5F31FA372FAC, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_778C5F13_553A_895E_41C3_5DFDD9378F1A, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_778C2F14_553A_895A_41BA_F8C3C2D139FB, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_6593C310_5A41_5636_41CD_6D7F4C3AF7BD, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_412FD659_5507_FBCA_41C7_2E3CE75E45C5, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_65931310_5A41_5636_41C6_6BF356770278, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_65935311_5A41_5636_41D5_30515BF86874, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_778F4F15_553A_895A_41CF_3DECCD75F153, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_65909311_5A41_5636_41BB_6947226CACF0, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_778FDF15_553A_895A_41B6_9A7094958640, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_6590D311_5A41_5636_41C5_0EA1DC3EBE8B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_778FEF16_553A_8946_41CA_99E4CF26B253, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_65902312_5A41_563A_41C7_72BD9DEAB429, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_778E1F16_553A_8946_4194_90289CC41BB5, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_65904312_5A41_563A_4187_54726E593E61, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_65919312_5A41_563A_4194_E3AA853533BA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_6591E313_5A41_563A_41D1_094045E66998, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_65913313_5A41_563A_41CE_7E7EC3CFC5C9, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false)",
    "media": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE"
   },
   {
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0', this.Container_77D4607B_4271_6060_41A3_CF43634A36B0.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71AE157E_4211_A060_41C1_A6FA728B9FF8, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E071490_556A_EC15_4193_60B7692BC205, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CFC3C8C_4232_A0A1_4198_B405D8F24CB7, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_77896F1A_553A_894E_41AD_345755A2712A, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_7789DF1A_553A_894E_41D0_912F029A4173, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_77885F1B_553A_894E_41A0_3F248053A945, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_77881F1C_553A_894A_41A5_2ADD685F2322, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_412A2661_5507_FBFA_41C8_9A2D1C8C8213, 'showEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_412B8661_5507_FBFA_41D0_0BAD895CD944, 'showEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7274D1DE_4FC9_8836_41CB_C35126518752, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_727441DF_4FC9_8836_41CC_0D0B18042478, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_6E6DDC4B_4272_E7A0_41C7_5048D0BE34B9, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_2517ABD6_2B28_B7FA_41B9_E118F143094B, 'showEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71B18581_4211_A0A0_41C4_C43629A7BC76, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false)",
    "camera": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71AE157E_4211_A060_41C1_A6FA728B9FF8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_659EC314_5A41_563E_41BA_7D1433703A46, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_659E7314_5A41_563E_41D2_FB3048B021BB, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_659E5315_5A41_563E_41D0_AD13870E754A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E071490_556A_EC15_4193_60B7692BC205, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CFC3C8C_4232_A0A1_4198_B405D8F24CB7, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_659F9315_5A41_563E_41C8_05C10E3862BF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_659FE315_5A41_563E_41B1_C223179FB2F8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_77896F1A_553A_894E_41AD_345755A2712A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_659F3316_5A41_563A_41C5_86474050953B, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_7789DF1A_553A_894E_41D0_912F029A4173, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_659EF316_5A41_563A_41C7_BA365907F87B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_77885F1B_553A_894E_41A0_3F248053A945, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_659E3316_5A41_563B_41CB_32A1EADACE52, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_77881F1C_553A_894A_41A5_2ADD685F2322, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_412A2661_5507_FBFA_41C8_9A2D1C8C8213, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_659E0317_5A41_563A_41C5_9BB14D2BF15E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_412B8661_5507_FBFA_41D0_0BAD895CD944, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_659E6317_5A41_563A_41B9_6E642DBF27C5, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7274D1DE_4FC9_8836_41CB_C35126518752, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_659F8317_5A41_5639_41D3_59675E7491AE, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_727441DF_4FC9_8836_41CC_0D0B18042478, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_659FD318_5A41_5636_4195_44076C4FC5DC, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_6E6DDC4B_4272_E7A0_41C7_5048D0BE34B9, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_659F1318_5A41_5636_4173_B29CDD0552CA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_659F5318_5A41_5637_41D6_7418F850D130, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_659CA319_5A41_5636_41B9_3E1263AD1E87, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_659CF319_5A41_5636_41A2_D228DCB30573, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')){ if(this.getKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')) { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71B18581_4211_A0A0_41C4_C43629A7BC76, 'showEffect', false); } else { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_659C231A_5A41_562A_41D3_B15DA7A9F922, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_659C031A_5A41_562A_41CD_0B71C26AB1C7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98"
   },
   {
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01', this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01.get('visible')); this.registerKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A', this.Image_61372758_2994_5F24_41C3_CE568D87E54A.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0E584_4211_A0A1_41C9_43847D46138C, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_3099A1C4_2B3A_E700_4170_E65033069B39, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE0DC93_4232_A0A0_41B9_FD0551C24AD5, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_7795BF22_553A_897E_41AF_306CC8CD7EB1, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_77946F23_553A_897E_41CD_D517F5F45082, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_7794CF24_553A_897A_41D1_47406777A3C3, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_7794AF24_553A_897A_41D4_D93AD6342D8A, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_77976F25_553A_897A_41B2_877CF8B52EE2, 'showEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_7797FF25_553A_897A_41D2_19DB1CF5232F, 'showEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726861E4_4FC9_880A_41B3_661275BA1317, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7269E1E5_4FC9_880A_41BA_3D5DD30BE06D, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_09C2DBC5_2FAE_5D9E_41A9_065ECAF2AF19, 'showEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_309861C8_2B3A_E700_41C1_6120ED54C917, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_309881C6_2B3A_E701_41C0_5AB081857C81, 'hideEffect', false)",
    "camera": "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_659D031A_5A41_562B_41CB_98B6B286594C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0E584_4211_A0A1_41C9_43847D46138C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_659A931B_5A41_562A_41A1_C053FEB8F27E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_659AF31B_5A41_562A_41AC_5ED865D7F80E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_659AD31C_5A41_562E_41C1_5C4B268A6E48, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A')){ if(this.getKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A')) { this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, true, -1, this.effect_659A031C_5A41_562E_41D1_D7BB5400C550, 'showEffect', false); } else { this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A'); if(this.existsKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01')){ if(this.getKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01')) { this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, true, -1, this.effect_659A531C_5A41_562E_41D6_A8B0AA1BE513, 'showEffect', false); } else { this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_3099A1C4_2B3A_E700_4170_E65033069B39, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE0DC93_4232_A0A0_41B9_FD0551C24AD5, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_659B931D_5A41_562E_41D2_BBB26CEBED6C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_659BE31D_5A41_562E_41D3_3DCF9F5AB5A3, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_7795BF22_553A_897E_41AF_306CC8CD7EB1, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_659B131E_5A41_562A_41C7_9946E6DF3404, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_77946F23_553A_897E_41CD_D517F5F45082, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_659B731E_5A41_562A_41D1_C014939C2626, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_7794CF24_553A_897A_41D1_47406777A3C3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_6598A31E_5A41_562A_41B0_BCA3FD983DF0, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_7794AF24_553A_897A_41D4_D93AD6342D8A, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_77976F25_553A_897A_41B2_877CF8B52EE2, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_6598C31F_5A41_562A_41D4_8DA779D7B64B, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_7797FF25_553A_897A_41D2_19DB1CF5232F, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_6598331F_5A41_562A_41C8_43E9DF7B0B7F, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726861E4_4FC9_880A_41B3_661275BA1317, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_65985320_5A41_5616_41B6_CE5EB15F14E2, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7269E1E5_4FC9_880A_41BA_3D5DD30BE06D, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_659B3320_5A41_5616_4180_F5AD84D91C2C, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_31459F67_2FAE_D69A_4164_37DF78EF38D3, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_31459F67_2FAE_D69A_4164_37DF78EF38D3, 'hideEffect', false); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6598A321_5A41_5616_41B0_C46BD4D2A828, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_309861C8_2B3A_E700_41C1_6120ED54C917, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_6598D321_5A41_5616_41C7_DC43732F46F2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_65982321_5A41_5616_41C4_25638606853A, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_309881C6_2B3A_E701_41C0_5AB081857C81, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')",
    "media": "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33"
   },
   {
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0', this.Container_77D4607B_4271_6060_41A3_CF43634A36B0.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604', this.Container_6E17E57D_4213_6060_41A1_9148D02E3604.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726B41E9_4FC9_881A_41C1_5CBE79CAE174, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B1A588_4211_A0A1_41C3_CBB8DE955D82, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E05549E_556A_EC0D_41A0_BEC64BE8CB09, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE05C95_4232_A0A0_418B_A9B5C6046C60, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_4127866E_5507_FBC7_41C3_B9D790BCA70F, 'showEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_4127466F_5507_FBC6_41D0_B25742EA3070, 'showEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_7791BF2A_553A_894E_41B6_9A12571B0D3B, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_77906F2B_553A_894E_41D1_5217E8D2C693, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_41270670_5507_FBDA_41CE_6B98C7CD6BCB, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_4124E670_5507_FBDA_41D1_F1F1733DD227, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_6F9F879E_5ACE_DE2A_41C7_B0CFE2A2FE37, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726C61EB_4FC9_881E_41D1_58E533222243, 'showEffect', false); this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, true, -1, this.effect_726DD1EB_4FC9_881E_418F_866B7958A526, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_6E562C55_4272_E7A0_41CC_0ED70CE160C3, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B691C0_5695_692C_41B1_11572F01AB2A, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B6D1C1_5695_692C_41B4_15B2D2584FF8, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B531C1_5695_692C_41BB_8382320E97CB, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71B1258A_4211_A0A0_4180_984D30BC8BF8, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false)",
    "camera": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_6599D322_5A41_561A_41C5_0FB292E0A565, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726B41E9_4FC9_881A_41C1_5CBE79CAE174, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B1A588_4211_A0A1_41C3_CBB8DE955D82, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_65991322_5A41_561A_41D4_4ABCF0C7A76C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_65996323_5A41_561A_41C1_680EA9B8ED9C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_65994323_5A41_561A_41AF_B3C778BE6921, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E05549E_556A_EC0D_41A0_BEC64BE8CB09, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE05C95_4232_A0A0_418B_A9B5C6046C60, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_65868323_5A41_561A_41D6_939E336BECAF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_4127866E_5507_FBC7_41C3_B9D790BCA70F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_65867324_5A41_561E_4180_9E3100C3117F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_4127466F_5507_FBC6_41D0_B25742EA3070, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_6587B324_5A41_561E_41D2_2B6A145EACC6, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_6587F324_5A41_561F_4183_26F135CA4ADB, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_7791BF2A_553A_894E_41B6_9A12571B0D3B, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_6587C325_5A41_561E_4191_33FB61D9D279, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_77906F2B_553A_894E_41D1_5217E8D2C693, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_65872325_5A41_561E_41C5_270BBC7C5B1A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_41270670_5507_FBDA_41CE_6B98C7CD6BCB, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_65877326_5A41_561A_41D1_E3426A7A9F92, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_4124E670_5507_FBDA_41D1_F1F1733DD227, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_6F9F879E_5ACE_DE2A_41C7_B0CFE2A2FE37, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_65874326_5A41_561A_41B8_9D0C4967D10A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726C61EB_4FC9_881E_41D1_58E533222243, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_65849326_5A41_561A_41D4_DA456D2C3C76, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604')){ if(this.getKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604')) { this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, true, -1, this.effect_726DD1EB_4FC9_881E_418F_866B7958A526, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, false, -1, this.effect_65843327_5A41_561A_419B_87D952716F79, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_6E562C55_4272_E7A0_41CC_0ED70CE160C3, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_65846327_5A41_561A_41B4_6A0621025788, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_65844327_5A41_561A_41D2_714E11982044, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B691C0_5695_692C_41B1_11572F01AB2A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_6585E328_5A41_5616_41C2_34087E91A0BE, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_65851328_5A41_5616_41D4_ECFAE55E4BED, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B6D1C1_5695_692C_41B4_15B2D2584FF8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_65850328_5A41_5616_41B9_4A080C98D349, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B531C1_5695_692C_41BB_8382320E97CB, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')){ if(this.getKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')) { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71B1258A_4211_A0A0_4180_984D30BC8BF8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_6582B329_5A41_5616_41D2_833E6DA8C097, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_65829329_5A41_5616_41CF_7CF836A6E042, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254"
   },
   {
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726FF1ED_4FC9_881A_41D3_46E1C42560D7, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0F58C_4211_A0A0_41AB_6FC57BF9CE23, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE7AC97_4232_A0A0_41BD_683EA2897E03, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41225675_5507_FBDA_41D4_83EED0E7A5BA, 'showEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41223675_5507_FBDA_4181_E233D89ED9D6, 'showEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_779F4F31_553A_895A_41C9_F611A827B3B4, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_779F3F31_553A_895A_41CA_F4B2075198EF, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_779C6F32_553A_895E_41C2_3348EBACAD75, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_779CDF32_553A_895F_41C8_52E0B2F6CB6A, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726F91EF_4FC9_8815_41C6_FEB96EF4ED62, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726FC1F0_4FC9_880A_41CE_1908D478796F, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B521C7_5695_6933_41C9_F4F4755C65CF, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083FA037_2B68_50BA_41C5_535FB194808D, 'showEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B561C8_5695_693C_41BE_5B728623950D, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B541C9_5695_693C_41D2_D5DBF933655C, 'hideEffect', false)",
    "camera": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_6585132A_5A41_566A_41CF_D8B44F31236E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726FF1ED_4FC9_881A_41D3_46E1C42560D7, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0F58C_4211_A0A0_41AB_6FC57BF9CE23, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_6585732A_5A41_566A_41C1_00E6D37B272F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_6582B32A_5A41_566A_416C_0715699428C6, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_6582832B_5A41_566A_41CA_E1158CCCDB23, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE7AC97_4232_A0A0_41BD_683EA2897E03, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_6582E32B_5A41_566A_41B6_AFBEA92D5A5A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41225675_5507_FBDA_41D4_83EED0E7A5BA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_6582132B_5A41_566A_41D5_3F792EA74A85, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41223675_5507_FBDA_4181_E233D89ED9D6, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_6582532C_5A41_566E_41C1_B02B08AAD1AA, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_6583832C_5A41_566E_4196_1C44A7F47D96, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_779F4F31_553A_895A_41C9_F611A827B3B4, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_6583D32C_5A41_566E_41CD_CBA8CB0F01CD, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_779F3F31_553A_895A_41CA_F4B2075198EF, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_6583232D_5A41_566E_41AB_FE694019040C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_779C6F32_553A_895E_41C2_3348EBACAD75, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_6583632D_5A41_566E_41B8_0CF7C6CE1141, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_779CDF32_553A_895F_41C8_52E0B2F6CB6A, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726F91EF_4FC9_8815_41C6_FEB96EF4ED62, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_6580932D_5A41_5669_41CA_CEFEA3264C22, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726FC1F0_4FC9_880A_41CE_1908D478796F, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_6580D32E_5A41_566A_41C2_1F0242B639A7, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_6580332E_5A41_566A_41C3_D445AC702CD7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B521C7_5695_6933_41C9_F4F4755C65CF, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083FA037_2B68_50BA_41C5_535FB194808D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_6580632F_5A41_566A_41AA_C3EBCEA994BB, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_6581932F_5A41_566A_41B9_63D066F814EC, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B561C8_5695_693C_41BE_5B728623950D, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_6581E32F_5A41_566A_41AF_D8DDA67E617E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B541C9_5695_693C_41D2_D5DBF933655C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')",
    "media": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7"
   },
   {
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726051F1_4FC9_880A_41D1_6185001C10DB, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B1F58E_4211_A0A0_4193_15907AE6E948, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE5CC9A_4232_A0A0_41C9_BFE43E88A8F1, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_4123B679_5507_FBCA_41B6_7A65B0727BCB, 'showEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_4123067A_5507_FBCE_41A4_A6CF223F2093, 'showEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_77984F37_553A_8946_41A3_E7B051EC6579, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_77980F38_553A_894A_41C0_A9313A6F49FE, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_7798CF38_553A_894A_41A7_7568B600AA9C, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_779B4F39_553A_894A_41BA_C60C009E96C4, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7262A1F3_4FC9_880E_41C3_259FDFF86250, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7262E1F4_4FC9_880A_41D1_55FAFDDF5D8C, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B531CE_5695_6934_41D0_CFB9F0962160, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083E6039_2B68_50B6_41C1_ECDB68119909, 'showEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B541CF_5695_6934_41BC_437899351995, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B5B1D0_5695_692C_41CF_E97741C8159A, 'hideEffect', false)",
    "camera": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_658E8330_5A41_5676_4197_DD5C96006ABA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726051F1_4FC9_880A_41D1_6185001C10DB, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B1F58E_4211_A0A0_4193_15907AE6E948, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_658E2330_5A41_5676_41B1_667114FE1AB8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_658E6330_5A41_5677_41C2_7280B035C89D, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_658E5331_5A41_5676_41B8_D3E6E93DFE78, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE5CC9A_4232_A0A0_41C9_BFE43E88A8F1, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_658F8331_5A41_5676_41D5_C0F0C123FC71, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_4123B679_5507_FBCA_41B6_7A65B0727BCB, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_658FD332_5A41_567A_41CC_C2B74964F378, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_4123067A_5507_FBCE_41A4_A6CF223F2093, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_658F0332_5A41_567A_41C3_FABF463F9572, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_658E3332_5A41_567B_41D4_046C139D074D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_77984F37_553A_8946_41A3_E7B051EC6579, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_658E1333_5A41_567A_41C7_6DF7AEC1503A, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_77980F38_553A_894A_41C0_A9313A6F49FE, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_658E5333_5A41_567A_41B7_76A4B53DFD5F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_7798CF38_553A_894A_41A7_7568B600AA9C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_658FB333_5A41_567A_41C1_A696D5E4C590, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_779B4F39_553A_894A_41BA_C60C009E96C4, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7262A1F3_4FC9_880E_41C3_259FDFF86250, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_658FD334_5A41_567E_417E_D7C3CC5522ED, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7262E1F4_4FC9_880A_41D1_55FAFDDF5D8C, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_658F1334_5A41_567E_41CA_B5E5129286E8, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_658CB334_5A41_567F_417F_3B79E389B232, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B531CE_5695_6934_41D0_CFB9F0962160, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083E6039_2B68_50B6_41C1_ECDB68119909, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_658C9335_5A41_567E_4105_29AE8A1F6B70, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_658CD335_5A41_567E_41B7_3D7CB4896482, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B541CF_5695_6934_41BC_437899351995, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_658C2335_5A41_5679_41CA_4EC2CBB7BB12, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B5B1D0_5695_692C_41CF_E97741C8159A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')",
    "media": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283"
   },
   {
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726311F5_4FC9_880A_41B4_030414259793, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B11592_4211_A0A0_41CE_905A6104BD57, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E1B94AE_556A_EC0D_41D2_7F5E6534CF32, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E1BB4AF_556A_EC0B_41D1_C9D283206AE1, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE4FC9B_4232_A0A0_41C7_BEB34AD7E39A, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DED67D_5507_FBCA_41D1_8C3BF73507F8, 'showEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DE967D_5507_FBC5_41D4_AEC0F414A77F, 'showEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_779AFF3D_553A_894A_41B6_ABA840537EE1, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_779AAF3D_553A_894A_41D3_E298C3D38F3B, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_76650F3E_553A_8946_41C2_7E9FE84BB636, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_7665CF3E_553A_8946_41CA_38626EF15A12, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7264C1F6_4FC9_8BF6_41D3_3406BD33533A, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726461F7_4FC9_8BF6_41C5_73FA0E92B63A, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B551D5_5695_68D4_41BA_B22B99BE53D5, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_40B5B1D6_5695_68D4_41BE_E930F5807F1E, 'showEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B5F1D6_5695_68D4_41B3_5F75C52C7C8E, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B5D1D7_5695_68D4_41C5_3CFF9D0F8075, 'hideEffect', false)",
    "camera": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_658D2336_5A41_567A_4199_FBE294DA8EC4, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726311F5_4FC9_880A_41B4_030414259793, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B11592_4211_A0A0_41CE_905A6104BD57, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_658D5336_5A41_567B_41BD_7F024FCF4564, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E1B94AE_556A_EC0D_41D2_7F5E6534CF32, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_658A8337_5A41_567A_41AE_3B1BDB5D9284, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_658AC337_5A41_567A_41C4_F40AA5CAF180, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E1BB4AF_556A_EC0B_41D1_C9D283206AE1, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE4FC9B_4232_A0A0_41C7_BEB34AD7E39A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_658A1338_5A41_5676_41BB_B7B6BF3EB065, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DED67D_5507_FBCA_41D1_8C3BF73507F8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_658A6338_5A41_5676_41D2_5FE07E7B68B2, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DE967D_5507_FBC5_41D4_AEC0F414A77F, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_658B9338_5A41_5676_41CF_8FE792E59171, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_658BE339_5A41_5676_4195_9443082BAF95, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_779AFF3D_553A_894A_41B6_ABA840537EE1, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_658B2339_5A41_5676_41A0_E835C63044C2, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_779AAF3D_553A_894A_41D3_E298C3D38F3B, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_658B7339_5A41_5676_41D6_A2A2268854A2, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_76650F3E_553A_8946_41C2_7E9FE84BB636, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_658B433A_5A41_566A_41D0_20CBD1F3AD8F, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_7665CF3E_553A_8946_41CA_38626EF15A12, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7264C1F6_4FC9_8BF6_41D3_3406BD33533A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_6588F33A_5A41_566A_418A_DEECD5E7CC78, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726461F7_4FC9_8BF6_41C5_73FA0E92B63A, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_6588233A_5A41_566A_41D2_B7946004B737, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_6588733B_5A41_566A_41C4_0D1FE6C6AAB8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B551D5_5695_68D4_41BA_B22B99BE53D5, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_40B5B1D6_5695_68D4_41BE_E930F5807F1E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_6589F33B_5A41_566A_41CB_B9E99EBD1E85, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_658B633C_5A41_566E_41C2_C4E3D65F4BF4, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B5F1D6_5695_68D4_41B3_5F75C52C7C8E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_6588B33C_5A41_566E_41C5_B4426BA42218, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B5D1D7_5695_68D4_41C5_3CFF9D0F8075, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')",
    "media": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB"
   },
   {
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726431F8_4FC9_8BFA_41CA_55EA2BE0E8C6, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0F593_4211_A0A0_418E_AFD082FA622B, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E19C4B4_556A_EC1D_41D1_A2A708D8EAA3, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E1994B4_556A_EC1D_41BA_6E287D4B2DC5, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEB9C9D_4232_A0A0_4182_47BCA14283F7, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DE1680_5507_FB3A_41D5_191A2AC8DF50, 'showEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DFF681_5507_FB3A_41CA_29611E76A119, 'showEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_7666EF42_553A_893E_41C0_918A27244B84, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_76615F42_553A_893E_41CA_F9F9CB909ECA, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_76678F43_553A_893E_41CF_230AFDC24DDC, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_76664F43_553A_893D_41CD_281B8D1C914E, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726591F9_4FC9_8BFA_41AD_697A944F3807, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7265C1FA_4FC9_8BFE_41D0_249438D9ACE6, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B5D1DC_5695_68D4_41C1_E888CB003076, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34, 'showEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B401DD_5695_68D4_41B7_5BFD96443315, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B471DE_5695_68D4_41C4_215F0D1DFFA2, 'hideEffect', false)",
    "camera": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_6588533D_5A41_566E_41B0_25E7C4289B6E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726431F8_4FC9_8BFA_41CA_55EA2BE0E8C6, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0F593_4211_A0A0_418E_AFD082FA622B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_6589F33D_5A41_566E_41B5_59C17A11F6FB, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E19C4B4_556A_EC1D_41D1_A2A708D8EAA3, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_6589133D_5A41_566E_41BA_F647F61056E8, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_6589633E_5A41_566A_41A7_06B3E76141CD, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E1994B4_556A_EC1D_41BA_6E287D4B2DC5, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEB9C9D_4232_A0A0_4182_47BCA14283F7, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_6476933E_5A41_566A_41D4_E4876E9052CC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DE1680_5507_FB3A_41D5_191A2AC8DF50, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_6476E33F_5A41_566A_41BC_7C507275E6CC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DFF681_5507_FB3A_41CA_29611E76A119, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_6476333F_5A41_566A_4185_CC0C080EE799, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_6476533F_5A41_566A_41C7_3659E0870E08, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_7666EF42_553A_893E_41C0_918A27244B84, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_6477A340_5A41_5616_41CA_29D0F3E71036, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_76615F42_553A_893E_41CA_F9F9CB909ECA, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_6477F340_5A41_5616_418D_02D8332F7F28, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_76678F43_553A_893E_41CF_230AFDC24DDC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_6477C340_5A41_5617_41D1_8A712982CDA1, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_76664F43_553A_893D_41CD_281B8D1C914E, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726591F9_4FC9_8BFA_41AD_697A944F3807, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_64776341_5A41_5616_41C5_3C36871E400F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7265C1FA_4FC9_8BFE_41D0_249438D9ACE6, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_6474A341_5A41_5616_41C4_2E558031DBA2, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_6474C342_5A41_561A_41D5_915AEF2722CD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B5D1DC_5695_68D4_41C1_E888CB003076, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_64742342_5A41_561A_41BE_EABF4779F0A7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_64744342_5A41_561B_41CA_A263BEBA4908, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B401DD_5695_68D4_41B7_5BFD96443315, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_64758343_5A41_561A_41C3_C928AB683355, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B471DE_5695_68D4_41C4_215F0D1DFFA2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')",
    "media": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3"
   },
   {
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726651FB_4FC9_8BFE_41B0_507650F7FA47, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B06595_4211_A0A0_41AF_5A05C1CE96AC, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E1834B9_556A_EC17_41D2_9430EB548F52, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E18C4BA_556A_EC15_41B0_993036CBA4D3, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEB3C9F_4232_A0A0_419A_6B51F183C876, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DD6684_5507_FB3A_41D3_DD4B57C8BB93, 'showEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DD0684_5507_FB3A_41CD_43AD81E812D7, 'showEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_76631F47_553A_89C6_41CE_1E3AAAF846A7, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_7663FF48_553A_89CA_41CF_8F6414C201B4, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_76627F48_553A_89CA_41BE_08724A507BBD, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_76622F49_553A_89CA_4193_06F419E1E872, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726711FC_4FC9_8BFA_41B4_84CA982A4B68, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726751FD_4FC9_8BFA_41CC_B39E07B66A99, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B3B1E3_5695_68EC_41C7_C902A56D8A5C, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7, 'showEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B451E4_5695_68F4_41C3_8E61F5DD4411, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B481E4_5695_68F5_41D1_1E48168FD3C5, 'hideEffect', false)",
    "camera": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_64728344_5A41_561E_41C2_AF431E8D1081, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726651FB_4FC9_8BFE_41B0_507650F7FA47, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B06595_4211_A0A0_41AF_5A05C1CE96AC, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_6472D344_5A41_561E_41BC_4AD47B01DE92, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E1834B9_556A_EC17_41D2_9430EB548F52, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_64721344_5A41_561E_41C5_4C9DC428EFEF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_64725345_5A41_561E_41C9_94DC5E82C390, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E18C4BA_556A_EC15_41B0_993036CBA4D3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEB3C9F_4232_A0A0_419A_6B51F183C876, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_6475D345_5A41_561E_41D6_428AC284BC16, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DD6684_5507_FB3A_41D3_DD4B57C8BB93, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_64751345_5A41_561E_41C9_7AC14FDA350D, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DD0684_5507_FB3A_41CD_43AD81E812D7, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_6472A346_5A41_561A_41CE_1AE0785D4FB4, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_6472F346_5A41_561A_41C0_28FAA1449BB3, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_76631F47_553A_89C6_41CE_1E3AAAF846A7, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_64723347_5A41_561A_41C2_803421838442, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_7663FF48_553A_89CA_41CF_8F6414C201B4, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_64720347_5A41_561A_41C1_831B71B1C82E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_76627F48_553A_89CA_41BE_08724A507BBD, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_64725347_5A41_561A_41B1_84F6F457259E, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_76622F49_553A_89CA_4193_06F419E1E872, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726711FC_4FC9_8BFA_41B4_84CA982A4B68, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_6473A347_5A41_5619_4197_7EBC91C82506, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726751FD_4FC9_8BFA_41CC_B39E07B66A99, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_6473C348_5A41_5616_41C3_08C12E24276B, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_64736348_5A41_5616_41D0_9E67A8AB88A7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B3B1E3_5695_68EC_41C7_C902A56D8A5C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_6470B349_5A41_5616_41D1_D0E65FA9A5FD, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_6470D349_5A41_5616_41C2_E72E32D86004, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B451E4_5695_68F4_41C3_8E61F5DD4411, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_64702349_5A41_5616_41D3_43E200F6AE0B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B481E4_5695_68F5_41D1_1E48168FD3C5, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')",
    "media": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B"
   },
   {
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_7259D1FE_4FC9_8BF6_41CF_DB27A5C12535, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B38597_4211_A0A0_4180_89B4D6D90C2E, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E1E14BF_556A_EC0B_41C8_3FCB5AED267C, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E1ED4C0_556A_EC75_41C5_8ED0EF18D6DF, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEAFCA0_4232_A0E1_41C6_589373582369, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DAA688_5507_FB4A_41C7_B00D12B1851C, 'showEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DA6688_5507_FB4A_41C7_96F748C2664C, 'showEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_766DBF4D_553A_89CA_41C1_6179891B36AF, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_766C6F4D_553A_89CA_41D0_B1E056BC8D9B, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_766C2F4E_553A_89C6_41D5_2DB544CB9DBD, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_766C8F4E_553A_89C6_41CD_09EA7ADE4415, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_725A91FF_4FC9_8BF5_41B7_502D2AAEEB51, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_725AE200_4FC9_880A_41AA_CF59DBED9A80, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B231EA_5695_68FC_41BA_C901C332A906, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1, 'showEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B261EB_5695_68FC_41D4_AFBF40731950, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B251EB_5695_68FC_41C5_DA3C7FB2FC27, 'hideEffect', false)",
    "camera": "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_6471C34A_5A41_562A_41D5_C26287F31618, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_7259D1FE_4FC9_8BF6_41CF_DB27A5C12535, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B38597_4211_A0A0_4180_89B4D6D90C2E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_6471034A_5A41_562A_41D4_F98653B1C234, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E1E14BF_556A_EC0B_41C8_3FCB5AED267C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_647EB34B_5A41_562A_41CE_B21A4066292F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_647E934B_5A41_562A_41B4_DB9A62239530, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E1ED4C0_556A_EC75_41C5_8ED0EF18D6DF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEAFCA0_4232_A0E1_41C6_589373582369, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_647E234B_5A41_5629_41B7_6538DD5EF830, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DAA688_5507_FB4A_41C7_B00D12B1851C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_647E734C_5A41_562E_4197_31AB7C2860C2, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DA6688_5507_FB4A_41C7_96F748C2664C, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_647E534C_5A41_562E_41CD_01DFA211B777, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_647F834C_5A41_562E_41CA_E64B4C75F4D9, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_766DBF4D_553A_89CA_41C1_6179891B36AF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_647FC34D_5A41_562E_41C4_E008515BD10C, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_766C6F4D_553A_89CA_41D0_B1E056BC8D9B, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_647F734D_5A41_562E_41C6_959DE79821E8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_766C2F4E_553A_89C6_41D5_2DB544CB9DBD, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_647F534D_5A41_562E_41BA_611BE5BDB7F8, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_766C8F4E_553A_89C6_41CD_09EA7ADE4415, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_725A91FF_4FC9_8BF5_41B7_502D2AAEEB51, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_647CF34E_5A41_562A_41B0_203CC4E311D8, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_725AE200_4FC9_880A_41AA_CF59DBED9A80, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_647E434E_5A41_562A_41C9_E08F8B7E0A5B, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_647FD34F_5A41_562A_41CB_B68896E2090D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B231EA_5695_68FC_41BA_C901C332A906, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_647FC34F_5A41_562A_41BE_E41654133044, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_647F134F_5A41_562A_41D2_FB19B9E3C586, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B261EB_5695_68FC_41D4_AFBF40731950, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_647CB350_5A41_5636_41D0_97BFA9078C25, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B251EB_5695_68FC_41C5_DA3C7FB2FC27, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')",
    "media": "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB"
   },
   {
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0', this.Container_77D4607B_4271_6060_41A3_CF43634A36B0.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356', this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356.get('visible')); this.registerKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604', this.Container_6E17E57D_4213_6060_41A1_9148D02E3604.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_71C44C38_5675_6F14_41C9_81C041298B77, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71C42C38_5675_6F14_41D1_94887A8CF8D1, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_71C40C39_5675_6F14_41C9_F19C41041CD7, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_64CAC37F_5677_990B_41BC_3ED16ECB47B4, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_71CBFC39_5675_6F14_41C4_44E0D31CAC52, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_71C53C3A_5675_6F14_41D2_D494E87C35E6, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_71C4EC3B_5675_6F14_41B6_DFD422A44844, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_71C4CC3B_5675_6F14_41A1_6C19A8EE6BAE, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_71C4AC3C_5675_6F0C_41D2_FB34B665FF51, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_71C48C3C_5675_6F0C_41BF_5344818BB903, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_71C47C3D_5675_6F0C_41CF_1C7196C6DE79, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_71C40C3D_5675_6F0C_41CA_221F8D99D9A6, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_71CBCC3E_5675_6F0C_41BB_AA9EC38FA333, 'showEffect', false); this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, true, -1, this.effect_71CBAC3F_5675_6F0C_41C3_4BC30C9FECC4, 'showEffect', false); this.setComponentVisibility(this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356, true, -1, this.effect_71CB6C3F_5675_6F0C_41D0_854FD3D4AAB0, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_41CE9BF1_567B_38EC_4194_6A36FD27C15F, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_71CB3C40_5675_6F74_41C9_03F106DB52FC, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_71CACC41_5675_6F74_41B6_52F4F2B26322, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_71C45C41_5675_6F74_41D5_7BFE4EFCAC53, 'showEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_71C43C42_5675_6F74_41CA_30D59D0D6443, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71CBEC42_5675_6F75_41BB_8AB9D428F376, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_71CBCC43_5675_6F74_41C5_5446C930C092, 'showEffect', false)",
    "camera": "this.panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_647C4350_5A41_5636_41D4_5EEB0B2F72B5, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_71C44C38_5675_6F14_41C9_81C041298B77, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71C42C38_5675_6F14_41D1_94887A8CF8D1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_647D9351_5A41_5636_41CE_6EC0B3191E3A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_71C40C39_5675_6F14_41C9_F19C41041CD7, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_647DE351_5A41_5636_41D5_5315AECE5469, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_647D1351_5A41_5636_41BD_A47D152F7849, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_64CAC37F_5677_990B_41BC_3ED16ECB47B4, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_71CBFC39_5675_6F14_41C4_44E0D31CAC52, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_647D6352_5A41_563A_41C2_4D9FE2E034E1, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_647D4352_5A41_563A_41D3_51F2CD341D8C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_71C53C3A_5675_6F14_41D2_D494E87C35E6, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_647AF352_5A41_563A_41D2_7659676221BA, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_71C4EC3B_5675_6F14_41B6_DFD422A44844, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_647A2353_5A41_563A_41C5_93427197CFFD, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_71C4CC3B_5675_6F14_41A1_6C19A8EE6BAE, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_647A0353_5A41_563A_41CF_5142CD1DB50C, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_71C4AC3C_5675_6F0C_41D2_FB34B665FF51, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_647BA353_5A41_5639_41D6_22D67EB07D7F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_71C48C3C_5675_6F0C_41BF_5344818BB903, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_647BE354_5A41_563E_41D1_E93B759779EB, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_71C47C3D_5675_6F0C_41CF_1C7196C6DE79, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_71C40C3D_5675_6F0C_41CA_221F8D99D9A6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_647B1354_5A41_563E_41CA_CA069018A7DA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_71CBCC3E_5675_6F0C_41BB_AA9EC38FA333, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_647B5354_5A41_563F_41D4_895A2A14B8D2, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604')){ if(this.getKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604')) { this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, true, -1, this.effect_71CBAC3F_5675_6F0C_41C3_4BC30C9FECC4, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, false, -1, this.effect_64789355_5A41_563E_41B1_7458CC7B7973, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604'); if(this.existsKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356')){ if(this.getKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356')) { this.setComponentVisibility(this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356, true, -1, this.effect_71CB6C3F_5675_6F0C_41D0_854FD3D4AAB0, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356, false, -1, this.effect_64788355_5A41_563E_41CC_5484242C981C, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_41CE9BF1_567B_38EC_4194_6A36FD27C15F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_64782356_5A41_563A_41C4_173876D6B846, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_64785356_5A41_563A_41C9_E2AB2B58127B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_71CB3C40_5675_6F74_41C9_03F106DB52FC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6479A356_5A41_563A_41D3_C1A6A79B84FA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_71CACC41_5675_6F74_41B6_52F4F2B26322, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_71C45C41_5675_6F74_41D5_7BFE4EFCAC53, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_6479C357_5A41_563A_41C2_6C7708A4499A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_64791357_5A41_563A_41D1_4472EAD192FD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_71C43C42_5675_6F74_41CA_30D59D0D6443, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')){ if(this.getKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')) { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71CBEC42_5675_6F75_41BB_8AB9D428F376, 'showEffect', false); } else { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_64796357_5A41_5639_41C6_3C2B9EBEFBC7, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_71CBCC43_5675_6F74_41C5_5446C930C092, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_64782358_5A41_5636_41D4_2B09517847CC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C"
   },
   {
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0', this.Container_77D4607B_4271_6060_41A3_CF43634A36B0.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356', this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356.get('visible')); this.registerKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604', this.Container_6E17E57D_4213_6060_41A1_9148D02E3604.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setEndToItemIndex(this.mainPlayList, 11, 0); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_71CB8C44_5675_6F7C_41BB_33B02D6F19F5, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71CB4C44_5675_6F7D_41D4_A56DF9412857, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_71CB3C45_5675_6F7C_41D2_95CAA49CBA82, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_64CB4387_5677_99FB_41C0_5E9ABA4BE93A, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_71CAFC46_5675_6F7C_417E_DDE9F7FA378C, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_71CAAC46_5675_6F7C_41A3_D2180B2ED0EA, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_71CA8C47_5675_6F7C_41BB_AEAB1454686A, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_71CA6C47_5675_6F7C_41D0_C11256CAF3B8, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_71CA2C48_5675_6F74_41C3_76BA544887DF, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_71CB8C48_5675_6F75_41D0_BA164D8AACEA, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_71CB6C49_5675_6F74_41D0_22BF2B45AC93, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_71CB5C4A_5675_6F74_41BB_8190A3209C1F, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_71CB0C4A_5675_6F74_41B7_AB47F38F2527, 'showEffect', false); this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, true, -1, this.effect_71CAFC4B_5675_6F74_41CA_8A7752BEB6D3, 'showEffect', false); this.setComponentVisibility(this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356, true, -1, this.effect_71CABC4B_5675_6F74_41C7_F18911B6E65A, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_41CAABF9_567B_38DC_4198_B99575EB9FCA, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_71CA3C4C_5675_6F0C_41B8_EA963742928E, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_71C9EC4D_5675_6F0C_41C3_7A98842B70D2, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_71C9AC4D_5675_6F0F_41D3_2C350CFFB2F2, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_4CE7BAF0_569B_38EC_41B6_8C7B91E08C40, 'showEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71C94C4F_5675_6F0C_41D3_622785F10B00, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_71C92C4F_5675_6F0C_41C7_4547646F281E, 'showEffect', false)",
    "camera": "this.panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_64793359_5A41_5636_41BC_71E6A536369B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_71CB8C44_5675_6F7C_41BB_33B02D6F19F5, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71CB4C44_5675_6F7D_41D4_A56DF9412857, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_64791359_5A41_5636_41C4_57643A05BF4B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_71CB3C45_5675_6F7C_41D2_95CAA49CBA82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_64795359_5A41_5636_41D6_AF84825E8176, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_6466F35A_5A41_562A_41A7_2D781D31B9E6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_64CB4387_5677_99FB_41C0_5E9ABA4BE93A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_71CAFC46_5675_6F7C_417E_DDE9F7FA378C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_6466335A_5A41_562A_41C8_D362F08B419A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_6466035A_5A41_562B_4177_BB251B31BCD8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_71CAAC46_5675_6F7C_41A3_D2180B2ED0EA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_6467B35B_5A41_562A_41D2_4250B394B592, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_71CA8C47_5675_6F7C_41BB_AEAB1454686A, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_6467835B_5A41_562A_41C2_6CAF8A48DE86, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_71CA6C47_5675_6F7C_41D0_C11256CAF3B8, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_6467C35B_5A41_5629_41D1_3E1B6398E932, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_71CA2C48_5675_6F74_41C3_76BA544887DF, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_6467735C_5A41_562E_41CC_17BA1113A6F5, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_71CB8C48_5675_6F75_41D0_BA164D8AACEA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_6467435C_5A41_562E_41CB_7582F3985A32, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_71CB6C49_5675_6F74_41D0_22BF2B45AC93, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_71CB5C4A_5675_6F74_41BB_8190A3209C1F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_6464835C_5A41_562F_41AE_118684D33304, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_71CB0C4A_5675_6F74_41B7_AB47F38F2527, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_6464C35D_5A41_562E_41D4_F2CB59FB1CF5, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604')){ if(this.getKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604')) { this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, true, -1, this.effect_71CAFC4B_5675_6F74_41CA_8A7752BEB6D3, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, false, -1, this.effect_6464135D_5A41_562E_41D0_12B332A4C59C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604'); if(this.existsKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356')){ if(this.getKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356')) { this.setComponentVisibility(this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356, true, -1, this.effect_71CABC4B_5675_6F74_41C7_F18911B6E65A, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356, false, -1, this.effect_6464635D_5A41_5629_41D0_165D50B4FE7D, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_41CAABF9_567B_38DC_4198_B99575EB9FCA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_6465A35E_5A41_562A_41D3_04B4C691A62B, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_6465D35E_5A41_562A_41C4_F74F65B8807C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_71CA3C4C_5675_6F0C_41B8_EA963742928E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6465135E_5A41_562B_41D4_0A9FB8A7B0BE, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_71C9EC4D_5675_6F0C_41C3_7A98842B70D2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_6465535F_5A41_562A_41D5_9B48BC2FE023, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_71C9AC4D_5675_6F0F_41D3_2C350CFFB2F2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_4CE7BAF0_569B_38EC_41B6_8C7B91E08C40, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_6462E35F_5A41_562A_41D1_58AB2253189F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')){ if(this.getKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')) { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71C94C4F_5675_6F0C_41D3_622785F10B00, 'showEffect', false); } else { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_64623360_5A41_5616_41CE_D8682E62F26F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_71C92C4F_5675_6F0C_41C7_4547646F281E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_64626360_5A41_5616_41CB_6B9273396AC7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_4CCAE62B_55FA_AC0B_41D3_6531A82AC554.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_4CCAE62B_55FA_AC0B_41D3_6531A82AC554.webm"
  },
  "label": "MB",
  "width": 1920,
  "loop": false,
  "id": "video_4CCAE62B_55FA_AC0B_41D3_6531A82AC554",
  "height": 1080,
  "thumbnailUrl": "media/video_4CCAE62B_55FA_AC0B_41D3_6531A82AC554_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "playList_1BD491A7_5A41_521A_41C4_15F74C2BD61F",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0', this.Container_77D4607B_4271_6060_41A3_CF43634A36B0.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_4BD8F14B_5597_E40A_41B3_55F825C95BBB, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_4BD8B14C_5597_E40D_4190_117674B71D23, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_4BD8114D_5597_E40F_41D1_34C7BBE707C6, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_4BD8214D_5597_E40F_41B9_D50CF2B4F416, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_4BD9E14E_5597_E40D_41CB_5F7E3FC7FC6D, 'showEffect', false)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_1BD491A7_5A41_521A_41C4_15F74C2BD61F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1BD491A7_5A41_521A_41C4_15F74C2BD61F, 0, this.video_4CCAE62B_55FA_AC0B_41D3_6531A82AC554)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_64635361_5A41_5616_41B0_EEE599E95D9F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_4BD8F14B_5597_E40A_41B3_55F825C95BBB, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_6462C361_5A41_5616_41A8_BA08B0E95C67, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_4BD8B14C_5597_E40D_4190_117674B71D23, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_64621361_5A41_5616_419B_F90EA5A11987, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_4BD8114D_5597_E40F_41D1_34C7BBE707C6, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')){ if(this.getKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')) { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_4BD8214D_5597_E40F_41B9_D50CF2B4F416, 'showEffect', false); } else { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_64626362_5A41_561A_41D4_CE76CC0C4AF8, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_4BD9E14E_5597_E40D_41CB_5F7E3FC7FC6D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_6463A362_5A41_561A_41C7_19ED93B6FB4E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.video_4CCAE62B_55FA_AC0B_41D3_6531A82AC554"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_7AB00E25_51F3_127E_41C7_17B52509A472.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_7AB00E25_51F3_127E_41C7_17B52509A472.webm"
  },
  "label": "DM",
  "width": 1920,
  "loop": false,
  "id": "video_7AB00E25_51F3_127E_41C7_17B52509A472",
  "height": 1080,
  "thumbnailUrl": "media/video_7AB00E25_51F3_127E_41C7_17B52509A472_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "playList_1BD421A7_5A41_521A_4191_23A888E75A0E",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_4BDAC14F_5597_E40B_41B7_A26869342FF3, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7E316332_51AF_2B2D_419B_C1E4901A999F, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_7675FF57_553A_89C6_41A9_CE1353BBF600, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_7E309333_51AF_2B13_41C7_2F13138DBABC, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_76741F58_553A_89CA_41D3_03D1D15ED197, 'hideEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_40DF16C5_5161_6D76_41CE_23717A708B39, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_40DF46C6_5161_6D75_4178_022F57B6BB96, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_3C287B3E_51A2_9972_41B7_656605B0E8B4, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_02AA32EA_5065_8B1D_41D3_7CCD4EFB78A2, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_386801D4_51E2_8935_417D_BAC8BBA751DE, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5C2ABBF4_5161_7B15_41C5_B9136ACE46A5, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_7D08104C_51A1_2575_41B6_6337FC1F9382, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_77794990_5161_67ED_41B0_94BBED414FC4, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_4C3D4A8B_5161_25F3_41C3_4B9594B0BE8F, 'showEffect', false)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.playList_1BD421A7_5A41_521A_4191_23A888E75A0E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1BD421A7_5A41_521A_4191_23A888E75A0E, 0, this.video_7AB00E25_51F3_127E_41C7_17B52509A472)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_6460A362_5A41_561B_41BE_146FBB4CF3B8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_4BDAC14F_5597_E40B_41B7_A26869342FF3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_6460E363_5A41_561A_41D0_E952F5EEFDFF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7E316332_51AF_2B2D_419B_C1E4901A999F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_64603363_5A41_561A_41D0_793AE324DF64, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_7675FF57_553A_89C6_41A9_CE1353BBF600, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_64600364_5A41_561E_41CA_BFCBA90A6AC6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_7E309333_51AF_2B13_41C7_2F13138DBABC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_6461A364_5A41_561E_41C1_27FB446D3FA1, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_76741F58_553A_89CA_41D3_03D1D15ED197, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_40DF66C6_5161_6D75_4191_1EB238710CC7, 'hideEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_40DF66C6_5161_6D75_4191_1EB238710CC7, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_40DFB6C6_5161_6D75_4100_CA059BCAE420, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_40DFB6C6_5161_6D75_4100_CA059BCAE420, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_3C286B3E_51A2_9975_41C0_005CB61B26B7, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_3C286B3E_51A2_9975_41C0_005CB61B26B7, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_02ADB2EB_5065_8B13_41C8_6FDF308C307F, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_02ADB2EB_5065_8B13_41C8_6FDF308C307F, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_5C2A3BF3_5161_7B13_41C8_BD6DC8221933, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_5C2A3BF3_5161_7B13_41C8_BD6DC8221933, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_02ADF2EA_5065_8B1D_41D2_CEA58E6CE320, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_02ADF2EA_5065_8B1D_41D2_CEA58E6CE320, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_5C2AABF4_5161_7B15_41D3_D6AE4A0ECFC1, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_5C2AABF4_5161_7B15_41D3_D6AE4A0ECFC1, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5C2A8BF4_5161_7B15_41D4_11BB99605814, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5C2A8BF4_5161_7B15_41D4_11BB99605814, 'hideEffect', false); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_64615365_5A41_561E_41C7_8BDFB9907440, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_7D08104C_51A1_2575_41B6_6337FC1F9382, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_777EB990_5161_67ED_41A9_907A812EB140, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_777EB990_5161_67ED_41A9_907A812EB140, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_777EA990_5161_67EE_41C3_34CC041F734E, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_777EA990_5161_67EE_41C3_34CC041F734E, 'hideEffect', false)",
    "media": "this.video_7AB00E25_51F3_127E_41C7_17B52509A472"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_4D3A5613_55F6_6C1B_41D3_6631A644011A.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_4D3A5613_55F6_6C1B_41D3_6631A644011A.webm"
  },
  "label": "PDZ",
  "width": 1920,
  "loop": false,
  "id": "video_4D3A5613_55F6_6C1B_41D3_6631A644011A",
  "height": 1080,
  "thumbnailUrl": "media/video_4D3A5613_55F6_6C1B_41D3_6631A644011A_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "playList_1BD5F1A8_5A41_5216_41C3_83DC2A98E30A",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0', this.Container_77D4607B_4271_6060_41A3_CF43634A36B0.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_4BDCA151_5597_E416_41CA_282652C6B398, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_4BDC4152_5597_E415_41A5_7C0E67C18C40, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_4BDB8153_5597_E41B_41C8_D92EADDDA0D3, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_4BDB4153_5597_E41B_41CE_618C89EAE4E5, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_4BDB6154_5597_E41D_41A2_44336346A7AA, 'showEffect', false)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_1BD5F1A8_5A41_5216_41C3_83DC2A98E30A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1BD5F1A8_5A41_5216_41C3_83DC2A98E30A, 0, this.video_4D3A5613_55F6_6C1B_41D3_6631A644011A)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_646E5365_5A41_5619_41D5_8F95152B1986, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_4BDCA151_5597_E416_41CA_282652C6B398, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_646F8366_5A41_561A_41C1_FB0537F5B489, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_4BDC4152_5597_E415_41A5_7C0E67C18C40, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_646F3366_5A41_561A_41B9_89C58C3EE6F0, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_4BDB8153_5597_E41B_41C8_D92EADDDA0D3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')){ if(this.getKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')) { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_4BDB4153_5597_E41B_41CE_618C89EAE4E5, 'showEffect', false); } else { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_646F1367_5A41_561A_41CB_67A02EFD5E86, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_4BDB6154_5597_E41D_41A2_44336346A7AA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_646F4367_5A41_561A_41C5_5D50DDD85D85, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.video_4D3A5613_55F6_6C1B_41D3_6631A644011A"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_76330817_51F1_1E5A_41C8_BAE5158F0B37.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_76330817_51F1_1E5A_41C8_BAE5158F0B37.webm"
  },
  "label": "05 Nikitha",
  "width": 1920,
  "loop": false,
  "id": "video_76330817_51F1_1E5A_41C8_BAE5158F0B37",
  "height": 1080,
  "thumbnailUrl": "media/video_76330817_51F1_1E5A_41C8_BAE5158F0B37_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_4496B293_5ACF_363A_41CA_45AEF1C278E1",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid474B926D_5ACF_36EE_41D3_4F44DAC9C549VideoPlayer)",
    "media": "this.video_76330817_51F1_1E5A_41C8_BAE5158F0B37",
    "player": {
     "id": "viewer_uid474B926D_5ACF_36EE_41D3_4F44DAC9C549VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid1BD111AE_5A41_526A_41A9_FD4A3D6A5287",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid474B926D_5ACF_36EE_41D3_4F44DAC9C549VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_4496B293_5ACF_363A_41CA_45AEF1C278E1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_4496B293_5ACF_363A_41CA_45AEF1C278E1, 0, this.video_76330817_51F1_1E5A_41C8_BAE5158F0B37)"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.webm"
  },
  "label": "03 Ramprasad",
  "width": 1920,
  "loop": false,
  "id": "video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F",
  "height": 1080,
  "thumbnailUrl": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_44953293_5ACF_363A_41BA_206C9D538AE4",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid47484270_5ACF_36F6_41AF_980166D60CCAVideoPlayer)",
    "media": "this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F",
    "player": {
     "id": "viewer_uid47484270_5ACF_36F6_41AF_980166D60CCAVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid1BDF51B1_5A41_5276_41CF_5865CEEBA527",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid47484270_5ACF_36F6_41AF_980166D60CCAVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_44953293_5ACF_363A_41BA_206C9D538AE4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_44953293_5ACF_363A_41BA_206C9D538AE4, 0, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F)"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.webm"
  },
  "label": "06 Usha T",
  "width": 1920,
  "loop": false,
  "id": "video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6",
  "height": 1080,
  "thumbnailUrl": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_4495A294_5ACF_363E_41C1_0D6452B0F865",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid47772271_5ACF_36F6_41BF_885372D747B1VideoPlayer)",
    "media": "this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6",
    "player": {
     "id": "viewer_uid47772271_5ACF_36F6_41BF_885372D747B1VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid1BDC61B2_5A41_527A_41B0_D7CA2E3BE890",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid47772271_5ACF_36F6_41BF_885372D747B1VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_4495A294_5ACF_363E_41C1_0D6452B0F865, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_4495A294_5ACF_363E_41C1_0D6452B0F865, 0, this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6)"
   }
  ]
 },
 {
  "id": "PlayList_44941294_5ACF_363E_41BC_A407C4D29F48",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid47759274_5ACF_36FE_4199_106E91397DCEVideoPlayer)",
    "media": "this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6",
    "player": {
     "id": "viewer_uid47759274_5ACF_36FE_4199_106E91397DCEVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid1BDB91BB_5A41_526A_41C0_1D335A1AFF04",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid47759274_5ACF_36FE_4199_106E91397DCEVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_44941294_5ACF_363E_41BC_A407C4D29F48, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_44941294_5ACF_363E_41BC_A407C4D29F48, 0, this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6)"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.webm"
  },
  "label": "12 Angela Paulson",
  "width": 1920,
  "loop": false,
  "id": "video_79E6AF2E_51F1_724B_41D0_772ED7CFF496",
  "height": 1080,
  "thumbnailUrl": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_44949295_5ACF_363E_41BB_22F293FFE37C",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid47743275_5ACF_36FE_41C4_D2D02E415514VideoPlayer)",
    "media": "this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496",
    "player": {
     "id": "viewer_uid47743275_5ACF_36FE_41C4_D2D02E415514VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid1BDB71BB_5A41_5269_41C1_5ACA159D8594",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid47743275_5ACF_36FE_41C4_D2D02E415514VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_44949295_5ACF_363E_41BB_22F293FFE37C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_44949295_5ACF_363E_41BB_22F293FFE37C, 0, this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496)"
   }
  ]
 },
 {
  "id": "PlayList_44930296_5ACF_363A_41B1_8687521C9DB5",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4774B275_5ACF_36F9_41CE_B55613342D55VideoPlayer)",
    "media": "this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F",
    "player": {
     "id": "viewer_uid4774B275_5ACF_36F9_41CE_B55613342D55VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid1BD8D1BC_5A41_526E_41D4_1CC844885711",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid4774B275_5ACF_36F9_41CE_B55613342D55VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_44930296_5ACF_363A_41B1_8687521C9DB5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_44930296_5ACF_363A_41B1_8687521C9DB5, 0, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F)"
   }
  ]
 },
 {
  "id": "PlayList_44938296_5ACF_363A_41C0_98BEE675BACD",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid47711279_5ACF_36F6_41CE_234C7A186538VideoPlayer)",
    "media": "this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496",
    "player": {
     "id": "viewer_uid47711279_5ACF_36F6_41CE_234C7A186538VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid1BC621BF_5A41_526A_41D5_06121D577D9A",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid47711279_5ACF_36F6_41CE_234C7A186538VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_44938296_5ACF_363A_41C0_98BEE675BACD, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_44938296_5ACF_363A_41C0_98BEE675BACD, 0, this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496)"
   }
  ]
 },
 {
  "id": "PlayList_4493F297_5ACF_363A_41B1_59CFE336EFFB",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid477D327D_5ACF_36EE_41D4_4F470287D972VideoPlayer)",
    "media": "this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F",
    "player": {
     "id": "viewer_uid477D327D_5ACF_36EE_41D4_4F470287D972VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid1BC261C4_5A41_521E_41C8_219A3F21BAF8",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid477D327D_5ACF_36EE_41D4_4F470287D972VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_4493F297_5ACF_363A_41B1_59CFE336EFFB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_4493F297_5ACF_363A_41B1_59CFE336EFFB, 0, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F)"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_76174C24_51F1_167E_41CF_523D5490D758.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_76174C24_51F1_167E_41CF_523D5490D758.webm"
  },
  "label": "07 Smriti",
  "width": 1920,
  "loop": false,
  "id": "video_76174C24_51F1_167E_41CF_523D5490D758",
  "height": 1080,
  "thumbnailUrl": "media/video_76174C24_51F1_167E_41CF_523D5490D758_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_44928298_5ACF_3636_41BC_CDA4FCADFB88",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid477DE27E_5ACF_36EA_416E_7E4AEF28DAEAVideoPlayer)",
    "media": "this.video_76174C24_51F1_167E_41CF_523D5490D758",
    "player": {
     "id": "viewer_uid477DE27E_5ACF_36EA_416E_7E4AEF28DAEAVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid1BC3D1C4_5A41_521E_41C9_BCE222AE7076",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid477DE27E_5ACF_36EA_416E_7E4AEF28DAEAVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_44928298_5ACF_3636_41BC_CDA4FCADFB88, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_44928298_5ACF_3636_41BC_CDA4FCADFB88, 0, this.video_76174C24_51F1_167E_41CF_523D5490D758)"
   }
  ]
 },
 "this.Menu_1BB021D6_5A41_523A_41CA_018D7133E4AF",
 {
  "id": "effect_50BC88D7_41F1_A0A0_41C2_DFCE679DE04B",
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in"
 },
 {
  "id": "effect_4973D6BD_51D1_324E_41C0_AE2C94232344",
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_out"
 },
 {
  "id": "effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07",
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in"
 },
 {
  "id": "effect_4816F7BE_51D1_124A_41BA_7B4660D3C5D1",
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_out"
 },
 {
  "id": "effect_510D3286_41F6_E0A0_41B7_0837F6E6C079",
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in"
 },
 {
  "id": "effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42",
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in"
 },
 {
  "id": "effect_49156269_51D3_12F6_41D4_4641DC2CB11A",
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_out"
 },
 {
  "id": "effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C",
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in"
 },
 {
  "id": "effect_5F766399_51D7_3256_41C8_8058BFACBDFC",
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_out"
 },
 {
  "id": "effect_58318646_4F2F_2B69_41AC_962A6ED82AEE",
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in"
 },
 {
  "id": "effect_5F7E6C20_51D1_3677_41A7_5A242A038A1A",
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_out"
 },
 {
  "id": "effect_74D59241_4213_63A0_41CB_DA1C684AF71F",
  "class": "FadeOutEffect",
  "duration": 100,
  "easing": "cubic_in"
 },
 {
  "id": "effect_15430EDE_505D_7B35_41CA_3F5C176FC215",
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_out"
 },
 {
  "id": "effect_6CABAB38_5657_6914_4191_06C77603C80F",
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in"
 },
 {
  "id": "effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13",
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in"
 },
 "this.popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE",
 {
  "id": "ImageResource_3B6D458C_2B0E_6F00_4137_F60375F9E4C8",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 2500,
    "width": 4000,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_0.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1280,
    "width": 2048,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_1.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 640,
    "width": 1024,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_2.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 320,
    "width": 512,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_3.jpg"
   }
  ]
 },
 {
  "layout": "vertical",
  "footerHeight": 5,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid1BD111AE_5A41_526A_41A9_FD4A3D6A5287"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "minWidth": 20,
  "minHeight": 20,
  "shadowHorizontalLength": 3,
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_517E0847_5A3F_3219_41B6_0463EC273DB3",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "shadow": true,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "titlePaddingBottom": 5,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowVerticalLength": 0,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_4496B293_5ACF_363A_41CA_45AEF1C278E1.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_654F705B_50BD_8733_41D0_F63243597D98",
 "this.popup_5E84A72B_5062_8913_41D3_2E436895D709",
 {
  "id": "ImageResource_4617CE97_507D_BB33_41CC_277230F4FDD7",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 2500,
    "width": 4000,
    "url": "media/popup_5E84A72B_5062_8913_41D3_2E436895D709_0_0.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1280,
    "width": 2048,
    "url": "media/popup_5E84A72B_5062_8913_41D3_2E436895D709_0_1.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 640,
    "width": 1024,
    "url": "media/popup_5E84A72B_5062_8913_41D3_2E436895D709_0_2.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 320,
    "width": 512,
    "url": "media/popup_5E84A72B_5062_8913_41D3_2E436895D709_0_3.jpg"
   }
  ]
 },
 {
  "layout": "vertical",
  "footerHeight": 5,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid1BDF51B1_5A41_5276_41CF_5865CEEBA527"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "minWidth": 20,
  "minHeight": 20,
  "shadowHorizontalLength": 3,
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_517D4848_5A3F_3216_41A9_33DA82CBDA94",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "shadow": true,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "titlePaddingBottom": 5,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowVerticalLength": 0,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_44953293_5ACF_363A_41BA_206C9D538AE4.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_65BD6281_50A2_8B0E_41D1_6A6A3A214872",
 {
  "layout": "vertical",
  "footerHeight": 5,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid1BDC61B2_5A41_527A_41B0_D7CA2E3BE890"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "minWidth": 20,
  "minHeight": 20,
  "shadowHorizontalLength": 3,
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_517C9849_5A3F_3216_41AF_65BEAAA37C03",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "shadow": true,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "titlePaddingBottom": 5,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowVerticalLength": 0,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_4495A294_5ACF_363E_41C1_0D6452B0F865.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_654154AD_50A7_8F17_41CC_033E6CF6538E",
 {
  "layout": "vertical",
  "footerHeight": 5,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid1BDB91BB_5A41_526A_41C0_1D335A1AFF04"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "minWidth": 20,
  "minHeight": 20,
  "shadowHorizontalLength": 3,
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_51012845_5A3F_321E_41C4_265C652FA0A7",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "shadow": true,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "titlePaddingBottom": 5,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowVerticalLength": 0,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_44941294_5ACF_363E_41BC_A407C4D29F48.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_65155EA1_50A6_9B0F_41A2_DA50D7C2A9FC",
 {
  "layout": "vertical",
  "footerHeight": 5,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid1BDB71BB_5A41_5269_41C1_5ACA159D8594"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "minWidth": 20,
  "minHeight": 20,
  "shadowHorizontalLength": 3,
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_5101D846_5A3F_321A_41D2_77598A77A92F",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "shadow": true,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "titlePaddingBottom": 5,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowVerticalLength": 0,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_44949295_5ACF_363E_41BB_22F293FFE37C.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_6A02F7F5_50A2_88F7_41CF_48C2226BE573",
 {
  "layout": "vertical",
  "footerHeight": 5,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid1BD8D1BC_5A41_526E_41D4_1CC844885711"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "minWidth": 20,
  "minHeight": 20,
  "shadowHorizontalLength": 3,
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_5100B847_5A3F_321A_41D5_3B2A82F5D79B",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "shadow": true,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "titlePaddingBottom": 5,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowVerticalLength": 0,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_44930296_5ACF_363A_41B1_8687521C9DB5.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_67FA235E_50A5_8935_41D0_DC909E301520",
 {
  "layout": "vertical",
  "footerHeight": 5,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid1BC621BF_5A41_526A_41D5_06121D577D9A"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "minWidth": 20,
  "minHeight": 20,
  "shadowHorizontalLength": 3,
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_51023844_5A3F_321E_41C6_3CACE063EE0A",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "shadow": true,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "titlePaddingBottom": 5,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowVerticalLength": 0,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_44938296_5ACF_363A_41C0_98BEE675BACD.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_66D14DEA_50A2_F91D_41C8_77D742AED913",
 "this.popup_19B07CA2_569A_9C35_41C1_C421D3075B18",
 {
  "id": "ImageResource_2D7F042F_56B9_AC0A_41C5_A957BBD74718",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 2500,
    "width": 4000,
    "url": "media/popup_19B07CA2_569A_9C35_41C1_C421D3075B18_0_0.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1280,
    "width": 2048,
    "url": "media/popup_19B07CA2_569A_9C35_41C1_C421D3075B18_0_1.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 640,
    "width": 1024,
    "url": "media/popup_19B07CA2_569A_9C35_41C1_C421D3075B18_0_2.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 320,
    "width": 512,
    "url": "media/popup_19B07CA2_569A_9C35_41C1_C421D3075B18_0_3.jpg"
   }
  ]
 },
 {
  "layout": "vertical",
  "footerHeight": 5,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid1BC261C4_5A41_521E_41C8_219A3F21BAF8"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "minWidth": 20,
  "minHeight": 20,
  "shadowHorizontalLength": 3,
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_51031842_5A3F_321A_41D2_717FC79A1F02",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "shadow": true,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "titlePaddingBottom": 5,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowVerticalLength": 0,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_4493F297_5ACF_363A_41B1_59CFE336EFFB.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_673AFF1D_50AD_B937_41CD_D84791F4B91A",
 {
  "layout": "vertical",
  "footerHeight": 5,
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "modal": true,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonIconColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonPressedIconLineWidth": 5,
  "bodyPaddingTop": 0,
  "children": [
   "this.viewer_uid1BC3D1C4_5A41_521E_41C9_BCE222AE7076"
  ],
  "closeButtonPaddingTop": 5,
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "scrollBarColor": "#000000",
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "bodyPaddingRight": 0,
  "paddingTop": 0,
  "closeButtonBorderRadius": 0,
  "minWidth": 20,
  "minHeight": 20,
  "shadowHorizontalLength": 3,
  "borderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "shadowColor": "#000000",
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "bodyPaddingLeft": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarMargin": 2,
  "backgroundOpacity": 1,
  "closeButtonIconHeight": 20,
  "shadowBlurRadius": 6,
  "id": "window_51035843_5A3F_321A_41D3_9FC65298B8BE",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingLeft": 10,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "shadow": true,
  "closeButtonIconLineWidth": 5,
  "contentOpaque": false,
  "titlePaddingBottom": 5,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingTop": 10,
  "horizontalAlign": "center",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowVerticalLength": 0,
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "closeButtonBorderColor": "#000000",
  "titlePaddingTop": 5,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "close": "this.PlayList_44928298_5ACF_3636_41BC_CDA4FCADFB88.set('selectedIndex', -1);",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorRatios": [],
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "veilOpacity": 0.4,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerPaddingRight": 0,
  "titleFontSize": 14,
  "bodyPaddingBottom": 0,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverIconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_6AC20B05_50AE_F917_41AF_5EBBE7A3AAC3",
 "this.popup_0375FAC7_50CF_F816_41A2_8895EB06B570",
 {
  "id": "ImageResource_47E090CC_5062_8715_41B8_632E16047E40",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 2500,
    "width": 4000,
    "url": "media/popup_0375FAC7_50CF_F816_41A2_8895EB06B570_0_0.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1280,
    "width": 2048,
    "url": "media/popup_0375FAC7_50CF_F816_41A2_8895EB06B570_0_1.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 640,
    "width": 1024,
    "url": "media/popup_0375FAC7_50CF_F816_41A2_8895EB06B570_0_2.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 320,
    "width": 512,
    "url": "media/popup_0375FAC7_50CF_F816_41A2_8895EB06B570_0_3.jpg"
   }
  ]
 },
 "this.popup_0690991F_50C8_9836_41B5_3F1A35404AF0",
 {
  "id": "ImageResource_47E190CB_5062_8713_41B0_E16DED267F7E",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 2500,
    "width": 4000,
    "url": "media/popup_0690991F_50C8_9836_41B5_3F1A35404AF0_0_0.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1280,
    "width": 2048,
    "url": "media/popup_0690991F_50C8_9836_41B5_3F1A35404AF0_0_1.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 640,
    "width": 1024,
    "url": "media/popup_0690991F_50C8_9836_41B5_3F1A35404AF0_0_2.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 320,
    "width": 512,
    "url": "media/popup_0690991F_50C8_9836_41B5_3F1A35404AF0_0_3.jpg"
   }
  ]
 },
 "this.popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE",
 {
  "id": "ImageResource_47E390D7_5062_8733_41D3_D5B5D084F5CB",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 2500,
    "width": 4000,
    "url": "media/popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE_0_0.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1280,
    "width": 2048,
    "url": "media/popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE_0_1.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 640,
    "width": 1024,
    "url": "media/popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE_0_2.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 320,
    "width": 512,
    "url": "media/popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE_0_3.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_66F98209_5A41_5616_41A7_80421AA94DD6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 134.84,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 1.44,
     "targetPitch": -2.82,
     "easing": "linear",
     "targetYaw": 130.11,
     "yawSpeed": 1.88
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 1)",
     "path": "shortest",
     "pitchSpeed": 22.4,
     "targetPitch": -1.18,
     "easing": "cubic_in_out",
     "targetYaw": -137.72,
     "yawSpeed": 44
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_66D4E21B_5A41_562A_41C5_0A6008D4199D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 84.89,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 98.06,
     "targetPitch": -6.21,
     "easing": "cubic_in_out",
     "targetYaw": -129.18,
     "yawSpeed": 196.02
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -3.44,
     "easing": "cubic_in_out",
     "targetYaw": -105.73,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -5.45,
     "easing": "cubic_in_out",
     "targetYaw": -85.95,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 8.49,
     "targetPitch": -8.93,
     "easing": "cubic_in_out",
     "targetYaw": -75.23,
     "yawSpeed": 16.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 8)",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -11.99,
     "easing": "cubic_in_out",
     "targetYaw": -61.71,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_66C1D22F_5A41_566A_41BD_17A0745CB23C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -82.73,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 36.59,
     "targetPitch": -28.38,
     "easing": "cubic_in_out",
     "targetYaw": 45.58,
     "yawSpeed": 72.51
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 10.63,
     "targetPitch": -7.98,
     "easing": "cubic_in_out",
     "targetYaw": 74.7,
     "yawSpeed": 20.35
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 10.63,
     "targetPitch": -6.49,
     "easing": "cubic_in_out",
     "targetYaw": 125.43,
     "yawSpeed": 20.35
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 3)",
     "path": "shortest",
     "pitchSpeed": 7.42,
     "targetPitch": -10.94,
     "easing": "cubic_in_out",
     "targetYaw": 162.83,
     "yawSpeed": 13.9
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_66BA8242_5A41_561A_41CB_46FC3B4B46C3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -21.1,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 36.61,
     "targetPitch": -1.19,
     "easing": "cubic_in_out",
     "targetYaw": 111.34,
     "yawSpeed": 72.55
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -2.48,
     "easing": "cubic_in_out",
     "targetYaw": 171.02,
     "yawSpeed": 33.25
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 7)",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -4.14,
     "easing": "cubic_in_out",
     "targetYaw": -143.83,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_66971255_5A41_563E_41AC_F7AFEF999DF1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.97,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 4.08,
     "targetPitch": -17.19,
     "easing": "cubic_in_out",
     "targetYaw": -143.38,
     "yawSpeed": 7.18
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -12.25,
     "easing": "cubic_in_out",
     "targetYaw": 129.44,
     "yawSpeed": 33.25
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": 105.73,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -2.48,
     "easing": "cubic_in_out",
     "targetYaw": 74,
     "yawSpeed": 33.25
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 5)",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -1.53,
     "easing": "cubic_in_out",
     "targetYaw": 86.03,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_668E6268_5A41_5616_41D5_365C4613E2F6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.2,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 23.38,
     "targetPitch": -6.21,
     "easing": "cubic_in_out",
     "targetYaw": -129.18,
     "yawSpeed": 45.96
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -3.44,
     "easing": "cubic_in_out",
     "targetYaw": -105.73,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -5.45,
     "easing": "cubic_in_out",
     "targetYaw": -85.95,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 8.49,
     "targetPitch": -8.93,
     "easing": "cubic_in_out",
     "targetYaw": -75.23,
     "yawSpeed": 16.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 8)",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -11.99,
     "easing": "cubic_in_out",
     "targetYaw": -61.71,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6578227C_5A41_56EE_41D5_E28D34241B18",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.89,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 67.52,
     "targetPitch": -22.61,
     "easing": "cubic_in_out",
     "targetYaw": 146.25,
     "yawSpeed": 134.66
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -9.72,
     "easing": "cubic_in_out",
     "targetYaw": 109.66,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 9.56,
     "targetPitch": -5.1,
     "easing": "cubic_in_out",
     "targetYaw": 99.81,
     "yawSpeed": 18.2
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -5.45,
     "easing": "cubic_in_out",
     "targetYaw": 63.28,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 6)",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -10.94,
     "easing": "cubic_in_out",
     "targetYaw": 6.8,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_655E828F_5A41_562A_41D3_513543FC25AD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -167.15,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 33.12,
     "targetPitch": -11.51,
     "easing": "cubic_in_out",
     "targetYaw": 42.81,
     "yawSpeed": 65.54
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 4)",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -1.35,
     "easing": "cubic_in_out",
     "targetYaw": -26.5,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_6533A2A2_5A41_561A_41B0_F505F051CEF1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.21,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.67,
     "targetPitch": -22.61,
     "easing": "cubic_in_out",
     "targetYaw": 146.25,
     "yawSpeed": 34.49
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -9.72,
     "easing": "cubic_in_out",
     "targetYaw": 109.66,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 9.56,
     "targetPitch": -5.1,
     "easing": "cubic_in_out",
     "targetYaw": 99.81,
     "yawSpeed": 18.2
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -5.45,
     "easing": "cubic_in_out",
     "targetYaw": 63.28,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 6)",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -10.94,
     "easing": "cubic_in_out",
     "targetYaw": 6.8,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_651662B5_5A41_567E_41D5_5CCB147FD58D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -51.1,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 108,
     "targetPitch": -6.12,
     "easing": "cubic_in_out",
     "targetYaw": 14.65,
     "yawSpeed": 216
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -6.15,
     "easing": "cubic_in_out",
     "targetYaw": 23.88,
     "yawSpeed": 33.25
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 2)",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -43.37,
     "easing": "cubic_in_out",
     "targetYaw": -168.93,
     "yawSpeed": 33.25
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": 7.45,
     "easing": "cubic_in_out",
     "targetYaw": 131.45,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_650A42C7_5A41_561A_41AD_73690E3A3CA4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 39.04,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 20.44,
     "targetPitch": -1.19,
     "easing": "cubic_in_out",
     "targetYaw": 111.34,
     "yawSpeed": 40.06
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -2.48,
     "easing": "cubic_in_out",
     "targetYaw": 171.02,
     "yawSpeed": 33.25
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 7)",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -4.14,
     "easing": "cubic_in_out",
     "targetYaw": -143.83,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_65EE62DA_5A41_562A_41CF_B88273E76BA7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -94.23,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 6.68,
     "targetPitch": -10.32,
     "easing": "cubic_in_out",
     "targetYaw": 155.54,
     "yawSpeed": 12.41
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 8.49,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": -174.16,
     "yawSpeed": 16.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 9.56,
     "targetPitch": -11.55,
     "easing": "cubic_in_out",
     "targetYaw": -141.91,
     "yawSpeed": 18.2
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 8.49,
     "targetPitch": -5.01,
     "easing": "cubic_in_out",
     "targetYaw": -121.16,
     "yawSpeed": 16.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -10.5,
     "easing": "cubic_in_out",
     "targetYaw": -85.77,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 9)",
     "path": "shortest",
     "pitchSpeed": 9.56,
     "targetPitch": -26.63,
     "easing": "cubic_in_out",
     "targetYaw": -37.83,
     "yawSpeed": 18.2
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_65C0F2EE_5A41_57EA_41AF_E14DCE10E68A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.47,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 14.73,
     "targetPitch": -17.19,
     "easing": "cubic_in_out",
     "targetYaw": -143.38,
     "yawSpeed": 28.6
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -12.25,
     "easing": "cubic_in_out",
     "targetYaw": 129.44,
     "yawSpeed": 33.25
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": 105.73,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetPitch": -2.48,
     "easing": "cubic_in_out",
     "targetYaw": 74,
     "yawSpeed": 33.25
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 5)",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -1.53,
     "easing": "cubic_in_out",
     "targetYaw": 86.03,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_65A2D301_5A41_5616_41D2_375303657A38",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 75.52,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 2.83,
     "targetPitch": -10.32,
     "easing": "cubic_in_out",
     "targetYaw": 155.54,
     "yawSpeed": 4.68
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 8.49,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": -174.16,
     "yawSpeed": 16.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 9.56,
     "targetPitch": -11.55,
     "easing": "cubic_in_out",
     "targetYaw": -141.91,
     "yawSpeed": 18.2
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 8.49,
     "targetPitch": -5.01,
     "easing": "cubic_in_out",
     "targetYaw": -121.16,
     "yawSpeed": 16.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.7,
     "targetPitch": -10.5,
     "easing": "cubic_in_out",
     "targetYaw": -85.77,
     "yawSpeed": 22.5
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 9)",
     "path": "shortest",
     "pitchSpeed": 9.56,
     "targetPitch": -26.63,
     "easing": "cubic_in_out",
     "targetYaw": -37.83,
     "yawSpeed": 18.2
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "id": "effect_66A993C7_2B68_57DA_41B2_04B39F4CD777",
  "class": "SlideInEffect",
  "duration": 1000,
  "easing": "cubic_out",
  "from": "left"
 },
 {
  "id": "effect_25100BD5_2B28_B7FE_41C3_A604D65396B1",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5C8C0876_400D_056C_4197_4D21DD837174",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5C8C0876_400D_056C_4197_4D21DD837174",
 {
  "id": "effect_6595C30B_5A41_562A_4175_5894CE26D6C4",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5C8C2877_400D_056D_41A8_5F85BCABA018",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018",
 {
  "id": "effect_6595730B_5A41_562A_41BB_AE7935CD39A3",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
 {
  "id": "effect_6595630C_5A41_562E_41D6_7FCFB550AB4E",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
 {
  "id": "effect_6592F30C_5A41_562E_41C7_25C412C7B406",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5C8CB878_400D_0563_41C1_590C1BFEAD69",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69",
 {
  "id": "effect_6595A30D_5A41_562E_41C3_B75E0EDE8D73",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
 {
  "id": "effect_6595830D_5A41_562E_41D3_D1ECEB4E4E57",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
 {
  "id": "effect_6595330D_5A41_562E_41B8_455D9D27886F",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
 {
  "id": "effect_6595630E_5A41_562A_41C4_75903EEBF489",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
 {
  "id": "effect_6592A30E_5A41_562A_41B4_11643E024CD6",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7646B174_4217_6060_41B9_177997DC3A13",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6592E30E_5A41_562A_41D2_E9152419697D",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7646B174_4217_6060_41B9_177997DC3A13",
 {
  "id": "effect_5E00948A_556A_ECF5_41D0_CA74D0EF60E9",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_4C3F9A90_5161_25ED_41CA_C5B4E91434E4",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_269A2071_2B29_F0B6_41B4_001C61C97291",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_02AE32EF_5065_8B13_41CC_5B661BAA48A8",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_02AE32EF_5065_8B13_41CC_5B661BAA48A8",
 {
  "id": "effect_6592130F_5A41_562A_41D5_353AA0B2592C",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_778DEF13_553A_895E_41C7_531A1BBC730F",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6593B30F_5A41_562A_41A4_BE9661C0D705",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_778DEF13_553A_895E_41C7_531A1BBC730F",
 {
  "id": "effect_778C5F13_553A_895E_41C3_5DFDD9378F1A",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_65939310_5A41_5636_41C7_5F31FA372FAC",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_778C5F13_553A_895E_41C3_5DFDD9378F1A",
 {
  "id": "effect_778C2F14_553A_895A_41BA_F8C3C2D139FB",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_778C2F14_553A_895A_41BA_F8C3C2D139FB",
 {
  "id": "effect_6593C310_5A41_5636_41CD_6D7F4C3AF7BD",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_412FD659_5507_FBCA_41C7_2E3CE75E45C5",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_412FD659_5507_FBCA_41C7_2E3CE75E45C5",
 {
  "id": "effect_65931310_5A41_5636_41C6_6BF356770278",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_778F4F15_553A_895A_41CF_3DECCD75F153",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_65935311_5A41_5636_41D5_30515BF86874",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_778F4F15_553A_895A_41CF_3DECCD75F153",
 {
  "id": "effect_778FDF15_553A_895A_41B6_9A7094958640",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_65909311_5A41_5636_41BB_6947226CACF0",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_778FDF15_553A_895A_41B6_9A7094958640",
 {
  "id": "effect_778FEF16_553A_8946_41CA_99E4CF26B253",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6590D311_5A41_5636_41C5_0EA1DC3EBE8B",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_778FEF16_553A_8946_41CA_99E4CF26B253",
 {
  "id": "effect_778E1F16_553A_8946_4194_90289CC41BB5",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_65902312_5A41_563A_41C7_72BD9DEAB429",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_778E1F16_553A_8946_4194_90289CC41BB5",
 {
  "id": "effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_65904312_5A41_563A_4187_54726E593E61",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
 {
  "id": "effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_65919312_5A41_563A_4194_E3AA853533BA",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
 {
  "id": "effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6591E313_5A41_563A_41D1_094045E66998",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
 {
  "id": "effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_65913313_5A41_563A_41CE_7E7EC3CFC5C9",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
 {
  "id": "effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_25103BD5_2B28_B7FE_41C1_45F7C799132C",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_71AE157E_4211_A060_41C1_A6FA728B9FF8",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71AE157E_4211_A060_41C1_A6FA728B9FF8",
 {
  "id": "effect_659EC314_5A41_563E_41BA_7D1433703A46",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
 {
  "id": "effect_659E7314_5A41_563E_41D2_FB3048B021BB",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5E071490_556A_EC15_4193_60B7692BC205",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_659E5315_5A41_563E_41D0_AD13870E754A",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5E071490_556A_EC15_4193_60B7692BC205",
 {
  "id": "effect_5CFC3C8C_4232_A0A1_4198_B405D8F24CB7",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5CFC3C8C_4232_A0A1_4198_B405D8F24CB7",
 {
  "id": "effect_659F9315_5A41_563E_41C8_05C10E3862BF",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_77896F1A_553A_894E_41AD_345755A2712A",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_659FE315_5A41_563E_41B1_C223179FB2F8",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_77896F1A_553A_894E_41AD_345755A2712A",
 {
  "id": "effect_7789DF1A_553A_894E_41D0_912F029A4173",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_659F3316_5A41_563A_41C5_86474050953B",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7789DF1A_553A_894E_41D0_912F029A4173",
 {
  "id": "effect_77885F1B_553A_894E_41A0_3F248053A945",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_659EF316_5A41_563A_41C7_BA365907F87B",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_77885F1B_553A_894E_41A0_3F248053A945",
 {
  "id": "effect_77881F1C_553A_894A_41A5_2ADD685F2322",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_659E3316_5A41_563B_41CB_32A1EADACE52",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_77881F1C_553A_894A_41A5_2ADD685F2322",
 {
  "id": "effect_412A2661_5507_FBFA_41C8_9A2D1C8C8213",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_412A2661_5507_FBFA_41C8_9A2D1C8C8213",
 {
  "id": "effect_659E0317_5A41_563A_41C5_9BB14D2BF15E",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_412B8661_5507_FBFA_41D0_0BAD895CD944",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_412B8661_5507_FBFA_41D0_0BAD895CD944",
 {
  "id": "effect_659E6317_5A41_563A_41B9_6E642DBF27C5",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7274D1DE_4FC9_8836_41CB_C35126518752",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7274D1DE_4FC9_8836_41CB_C35126518752",
 {
  "id": "effect_659F8317_5A41_5639_41D3_59675E7491AE",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_727441DF_4FC9_8836_41CC_0D0B18042478",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_727441DF_4FC9_8836_41CC_0D0B18042478",
 {
  "id": "effect_659FD318_5A41_5636_4195_44076C4FC5DC",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6E6DDC4B_4272_E7A0_41C7_5048D0BE34B9",
  "class": "SlideInEffect",
  "duration": 1000,
  "easing": "cubic_out",
  "from": "top"
 },
 "this.effect_6E6DDC4B_4272_E7A0_41C7_5048D0BE34B9",
 {
  "id": "effect_659F1318_5A41_5636_4173_B29CDD0552CA",
  "class": "SlideOutEffect",
  "duration": 1000,
  "easing": "cubic_out",
  "to": "top"
 },
 {
  "id": "effect_2517ABD6_2B28_B7FA_41B9_E118F143094B",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_659F5318_5A41_5637_41D6_7418F850D130",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
 {
  "id": "effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_659CA319_5A41_5636_41B9_3E1263AD1E87",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
 {
  "id": "effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_659CF319_5A41_5636_41A2_D228DCB30573",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
 {
  "id": "effect_71B18581_4211_A0A0_41C4_C43629A7BC76",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71B18581_4211_A0A0_41C4_C43629A7BC76",
 {
  "id": "effect_659C231A_5A41_562A_41D3_B15DA7A9F922",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
 {
  "id": "effect_659C031A_5A41_562A_41CD_0B71C26AB1C7",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_659D031A_5A41_562B_41CB_98B6B286594C",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC",
 {
  "id": "effect_71B0E584_4211_A0A1_41C9_43847D46138C",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71B0E584_4211_A0A1_41C9_43847D46138C",
 {
  "id": "effect_659A931B_5A41_562A_41A1_C053FEB8F27E",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6",
 {
  "id": "effect_659AF31B_5A41_562A_41AC_5ED865D7F80E",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_3098B1C3_2B3A_E700_41B4_232B931F0113",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_659AD31C_5A41_562E_41C1_5C4B268A6E48",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113",
 {
  "id": "effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_659A031C_5A41_562E_41D1_D7BB5400C550",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC",
 {
  "id": "effect_3099A1C4_2B3A_E700_4170_E65033069B39",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_659A531C_5A41_562E_41D6_A8B0AA1BE513",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_3099A1C4_2B3A_E700_4170_E65033069B39",
 {
  "id": "effect_5CE0DC93_4232_A0A0_41B9_FD0551C24AD5",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5CE0DC93_4232_A0A0_41B9_FD0551C24AD5",
 {
  "id": "effect_659B931D_5A41_562E_41D2_BBB26CEBED6C",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7795BF22_553A_897E_41AF_306CC8CD7EB1",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_659BE31D_5A41_562E_41D3_3DCF9F5AB5A3",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7795BF22_553A_897E_41AF_306CC8CD7EB1",
 {
  "id": "effect_77946F23_553A_897E_41CD_D517F5F45082",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_659B131E_5A41_562A_41C7_9946E6DF3404",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_77946F23_553A_897E_41CD_D517F5F45082",
 {
  "id": "effect_7794CF24_553A_897A_41D1_47406777A3C3",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_659B731E_5A41_562A_41D1_C014939C2626",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7794CF24_553A_897A_41D1_47406777A3C3",
 {
  "id": "effect_7794AF24_553A_897A_41D4_D93AD6342D8A",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6598A31E_5A41_562A_41B0_BCA3FD983DF0",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7794AF24_553A_897A_41D4_D93AD6342D8A",
 {
  "id": "effect_77976F25_553A_897A_41B2_877CF8B52EE2",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_77976F25_553A_897A_41B2_877CF8B52EE2",
 {
  "id": "effect_6598C31F_5A41_562A_41D4_8DA779D7B64B",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7797FF25_553A_897A_41D2_19DB1CF5232F",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7797FF25_553A_897A_41D2_19DB1CF5232F",
 {
  "id": "effect_6598331F_5A41_562A_41C8_43E9DF7B0B7F",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_726861E4_4FC9_880A_41B3_661275BA1317",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_726861E4_4FC9_880A_41B3_661275BA1317",
 {
  "id": "effect_65985320_5A41_5616_41B6_CE5EB15F14E2",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7269E1E5_4FC9_880A_41BA_3D5DD30BE06D",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7269E1E5_4FC9_880A_41BA_3D5DD30BE06D",
 {
  "id": "effect_659B3320_5A41_5616_4180_F5AD84D91C2C",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_09C2DBC5_2FAE_5D9E_41A9_065ECAF2AF19",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_31459F67_2FAE_D69A_4164_37DF78EF38D3",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_309861C8_2B3A_E700_41C1_6120ED54C917",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6598A321_5A41_5616_41B0_C46BD4D2A828",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_309861C8_2B3A_E700_41C1_6120ED54C917",
 {
  "id": "effect_309821C7_2B3A_E700_41C0_E75CD3F76820",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6598D321_5A41_5616_41C7_DC43732F46F2",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820",
 {
  "id": "effect_309881C6_2B3A_E701_41C0_5AB081857C81",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_65982321_5A41_5616_41C4_25638606853A",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_309881C6_2B3A_E701_41C0_5AB081857C81",
 {
  "id": "effect_726B41E9_4FC9_881A_41C1_5CBE79CAE174",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6599D322_5A41_561A_41C5_0FB292E0A565",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_726B41E9_4FC9_881A_41C1_5CBE79CAE174",
 {
  "id": "effect_71B1A588_4211_A0A1_41C3_CBB8DE955D82",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71B1A588_4211_A0A1_41C3_CBB8DE955D82",
 {
  "id": "effect_65991322_5A41_561A_41D4_4ABCF0C7A76C",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
 {
  "id": "effect_65996323_5A41_561A_41C1_680EA9B8ED9C",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5E05549E_556A_EC0D_41A0_BEC64BE8CB09",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_65994323_5A41_561A_41AF_B3C778BE6921",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5E05549E_556A_EC0D_41A0_BEC64BE8CB09",
 {
  "id": "effect_5CE05C95_4232_A0A0_418B_A9B5C6046C60",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5CE05C95_4232_A0A0_418B_A9B5C6046C60",
 {
  "id": "effect_65868323_5A41_561A_41D6_939E336BECAF",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_4127866E_5507_FBC7_41C3_B9D790BCA70F",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4127866E_5507_FBC7_41C3_B9D790BCA70F",
 {
  "id": "effect_65867324_5A41_561E_4180_9E3100C3117F",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_4127466F_5507_FBC6_41D0_B25742EA3070",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4127466F_5507_FBC6_41D0_B25742EA3070",
 {
  "id": "effect_6587B324_5A41_561E_41D2_2B6A145EACC6",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7791BF2A_553A_894E_41B6_9A12571B0D3B",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6587F324_5A41_561F_4183_26F135CA4ADB",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7791BF2A_553A_894E_41B6_9A12571B0D3B",
 {
  "id": "effect_77906F2B_553A_894E_41D1_5217E8D2C693",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6587C325_5A41_561E_4191_33FB61D9D279",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_77906F2B_553A_894E_41D1_5217E8D2C693",
 {
  "id": "effect_41270670_5507_FBDA_41CE_6B98C7CD6BCB",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_65872325_5A41_561E_41C5_270BBC7C5B1A",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_41270670_5507_FBDA_41CE_6B98C7CD6BCB",
 {
  "id": "effect_4124E670_5507_FBDA_41D1_F1F1733DD227",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_65877326_5A41_561A_41D1_E3426A7A9F92",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4124E670_5507_FBDA_41D1_F1F1733DD227",
 {
  "id": "effect_6F9F879E_5ACE_DE2A_41C7_B0CFE2A2FE37",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_6F9F879E_5ACE_DE2A_41C7_B0CFE2A2FE37",
 {
  "id": "effect_65874326_5A41_561A_41B8_9D0C4967D10A",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_726C61EB_4FC9_881E_41D1_58E533222243",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_726C61EB_4FC9_881E_41D1_58E533222243",
 {
  "id": "effect_65849326_5A41_561A_41D4_DA456D2C3C76",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_726DD1EB_4FC9_881E_418F_866B7958A526",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_726DD1EB_4FC9_881E_418F_866B7958A526",
 {
  "id": "effect_65843327_5A41_561A_419B_87D952716F79",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6E562C55_4272_E7A0_41CC_0ED70CE160C3",
  "class": "SlideInEffect",
  "duration": 1000,
  "easing": "cubic_out",
  "from": "top"
 },
 "this.effect_6E562C55_4272_E7A0_41CC_0ED70CE160C3",
 {
  "id": "effect_65846327_5A41_561A_41B4_6A0621025788",
  "class": "SlideOutEffect",
  "duration": 1000,
  "easing": "cubic_out",
  "to": "top"
 },
 {
  "id": "effect_40B691C0_5695_692C_41B1_11572F01AB2A",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_65844327_5A41_561A_41D2_714E11982044",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B691C0_5695_692C_41B1_11572F01AB2A",
 {
  "id": "effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
 {
  "id": "effect_6585E328_5A41_5616_41C2_34087E91A0BE",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40B6D1C1_5695_692C_41B4_15B2D2584FF8",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_65851328_5A41_5616_41D4_ECFAE55E4BED",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B6D1C1_5695_692C_41B4_15B2D2584FF8",
 {
  "id": "effect_40B531C1_5695_692C_41BB_8382320E97CB",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_65850328_5A41_5616_41B9_4A080C98D349",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B531C1_5695_692C_41BB_8382320E97CB",
 {
  "id": "effect_71B1258A_4211_A0A0_4180_984D30BC8BF8",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71B1258A_4211_A0A0_4180_984D30BC8BF8",
 {
  "id": "effect_6582B329_5A41_5616_41D2_833E6DA8C097",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
 {
  "id": "effect_65829329_5A41_5616_41CF_7CF836A6E042",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_726FF1ED_4FC9_881A_41D3_46E1C42560D7",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6585132A_5A41_566A_41CF_D8B44F31236E",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_726FF1ED_4FC9_881A_41D3_46E1C42560D7",
 {
  "id": "effect_71B0F58C_4211_A0A0_41AB_6FC57BF9CE23",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71B0F58C_4211_A0A0_41AB_6FC57BF9CE23",
 {
  "id": "effect_6585732A_5A41_566A_41C1_00E6D37B272F",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_083FF036_2B68_50BA_41B2_BA99A13F9561",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561",
 {
  "id": "effect_6582B32A_5A41_566A_416C_0715699428C6",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6582832B_5A41_566A_41CA_E1158CCCDB23",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA",
 {
  "id": "effect_5CE7AC97_4232_A0A0_41BD_683EA2897E03",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5CE7AC97_4232_A0A0_41BD_683EA2897E03",
 {
  "id": "effect_6582E32B_5A41_566A_41B6_AFBEA92D5A5A",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_41225675_5507_FBDA_41D4_83EED0E7A5BA",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_41225675_5507_FBDA_41D4_83EED0E7A5BA",
 {
  "id": "effect_6582132B_5A41_566A_41D5_3F792EA74A85",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_41223675_5507_FBDA_4181_E233D89ED9D6",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_41223675_5507_FBDA_4181_E233D89ED9D6",
 {
  "id": "effect_6582532C_5A41_566E_41C1_B02B08AAD1AA",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_779F4F31_553A_895A_41C9_F611A827B3B4",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6583832C_5A41_566E_4196_1C44A7F47D96",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_779F4F31_553A_895A_41C9_F611A827B3B4",
 {
  "id": "effect_779F3F31_553A_895A_41CA_F4B2075198EF",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6583D32C_5A41_566E_41CD_CBA8CB0F01CD",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_779F3F31_553A_895A_41CA_F4B2075198EF",
 {
  "id": "effect_779C6F32_553A_895E_41C2_3348EBACAD75",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6583232D_5A41_566E_41AB_FE694019040C",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_779C6F32_553A_895E_41C2_3348EBACAD75",
 {
  "id": "effect_779CDF32_553A_895F_41C8_52E0B2F6CB6A",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6583632D_5A41_566E_41B8_0CF7C6CE1141",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_779CDF32_553A_895F_41C8_52E0B2F6CB6A",
 {
  "id": "effect_726F91EF_4FC9_8815_41C6_FEB96EF4ED62",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_726F91EF_4FC9_8815_41C6_FEB96EF4ED62",
 {
  "id": "effect_6580932D_5A41_5669_41CA_CEFEA3264C22",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_726FC1F0_4FC9_880A_41CE_1908D478796F",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_726FC1F0_4FC9_880A_41CE_1908D478796F",
 {
  "id": "effect_6580D32E_5A41_566A_41C2_1F0242B639A7",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40B521C7_5695_6933_41C9_F4F4755C65CF",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6580332E_5A41_566A_41C3_D445AC702CD7",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B521C7_5695_6933_41C9_F4F4755C65CF",
 {
  "id": "effect_083FA037_2B68_50BA_41C5_535FB194808D",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_083FA037_2B68_50BA_41C5_535FB194808D",
 {
  "id": "effect_6580632F_5A41_566A_41AA_C3EBCEA994BB",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40B561C8_5695_693C_41BE_5B728623950D",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6581932F_5A41_566A_41B9_63D066F814EC",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B561C8_5695_693C_41BE_5B728623950D",
 {
  "id": "effect_40B541C9_5695_693C_41D2_D5DBF933655C",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6581E32F_5A41_566A_41AF_D8DDA67E617E",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B541C9_5695_693C_41D2_D5DBF933655C",
 {
  "id": "effect_726051F1_4FC9_880A_41D1_6185001C10DB",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658E8330_5A41_5676_4197_DD5C96006ABA",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_726051F1_4FC9_880A_41D1_6185001C10DB",
 {
  "id": "effect_71B1F58E_4211_A0A0_4193_15907AE6E948",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71B1F58E_4211_A0A0_4193_15907AE6E948",
 {
  "id": "effect_658E2330_5A41_5676_41B1_667114FE1AB8",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_083EA038_2B68_50B6_41C3_0BE33D67069D",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D",
 {
  "id": "effect_658E6330_5A41_5677_41C2_7280B035C89D",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658E5331_5A41_5676_41B8_D3E6E93DFE78",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A",
 {
  "id": "effect_5CE5CC9A_4232_A0A0_41C9_BFE43E88A8F1",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5CE5CC9A_4232_A0A0_41C9_BFE43E88A8F1",
 {
  "id": "effect_658F8331_5A41_5676_41D5_C0F0C123FC71",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_4123B679_5507_FBCA_41B6_7A65B0727BCB",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4123B679_5507_FBCA_41B6_7A65B0727BCB",
 {
  "id": "effect_658FD332_5A41_567A_41CC_C2B74964F378",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_4123067A_5507_FBCE_41A4_A6CF223F2093",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4123067A_5507_FBCE_41A4_A6CF223F2093",
 {
  "id": "effect_658F0332_5A41_567A_41C3_FABF463F9572",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_77984F37_553A_8946_41A3_E7B051EC6579",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658E3332_5A41_567B_41D4_046C139D074D",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_77984F37_553A_8946_41A3_E7B051EC6579",
 {
  "id": "effect_77980F38_553A_894A_41C0_A9313A6F49FE",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658E1333_5A41_567A_41C7_6DF7AEC1503A",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_77980F38_553A_894A_41C0_A9313A6F49FE",
 {
  "id": "effect_7798CF38_553A_894A_41A7_7568B600AA9C",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658E5333_5A41_567A_41B7_76A4B53DFD5F",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7798CF38_553A_894A_41A7_7568B600AA9C",
 {
  "id": "effect_779B4F39_553A_894A_41BA_C60C009E96C4",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658FB333_5A41_567A_41C1_A696D5E4C590",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_779B4F39_553A_894A_41BA_C60C009E96C4",
 {
  "id": "effect_7262A1F3_4FC9_880E_41C3_259FDFF86250",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7262A1F3_4FC9_880E_41C3_259FDFF86250",
 {
  "id": "effect_658FD334_5A41_567E_417E_D7C3CC5522ED",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7262E1F4_4FC9_880A_41D1_55FAFDDF5D8C",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7262E1F4_4FC9_880A_41D1_55FAFDDF5D8C",
 {
  "id": "effect_658F1334_5A41_567E_41CA_B5E5129286E8",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40B531CE_5695_6934_41D0_CFB9F0962160",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658CB334_5A41_567F_417F_3B79E389B232",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B531CE_5695_6934_41D0_CFB9F0962160",
 {
  "id": "effect_083E6039_2B68_50B6_41C1_ECDB68119909",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_083E6039_2B68_50B6_41C1_ECDB68119909",
 {
  "id": "effect_658C9335_5A41_567E_4105_29AE8A1F6B70",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40B541CF_5695_6934_41BC_437899351995",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658CD335_5A41_567E_41B7_3D7CB4896482",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B541CF_5695_6934_41BC_437899351995",
 {
  "id": "effect_40B5B1D0_5695_692C_41CF_E97741C8159A",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658C2335_5A41_5679_41CA_4EC2CBB7BB12",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B5B1D0_5695_692C_41CF_E97741C8159A",
 {
  "id": "effect_726311F5_4FC9_880A_41B4_030414259793",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658D2336_5A41_567A_4199_FBE294DA8EC4",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_726311F5_4FC9_880A_41B4_030414259793",
 {
  "id": "effect_71B11592_4211_A0A0_41CE_905A6104BD57",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71B11592_4211_A0A0_41CE_905A6104BD57",
 {
  "id": "effect_658D5336_5A41_567B_41BD_7F024FCF4564",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5E1B94AE_556A_EC0D_41D2_7F5E6534CF32",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5E1B94AE_556A_EC0D_41D2_7F5E6534CF32",
 {
  "id": "effect_658A8337_5A41_567A_41AE_3B1BDB5D9284",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5E1BB4AF_556A_EC0B_41D1_C9D283206AE1",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658AC337_5A41_567A_41C4_F40AA5CAF180",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5E1BB4AF_556A_EC0B_41D1_C9D283206AE1",
 {
  "id": "effect_5CE4FC9B_4232_A0A0_41C7_BEB34AD7E39A",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5CE4FC9B_4232_A0A0_41C7_BEB34AD7E39A",
 {
  "id": "effect_658A1338_5A41_5676_41BB_B7B6BF3EB065",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_41DED67D_5507_FBCA_41D1_8C3BF73507F8",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_41DED67D_5507_FBCA_41D1_8C3BF73507F8",
 {
  "id": "effect_658A6338_5A41_5676_41D2_5FE07E7B68B2",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_41DE967D_5507_FBC5_41D4_AEC0F414A77F",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_41DE967D_5507_FBC5_41D4_AEC0F414A77F",
 {
  "id": "effect_658B9338_5A41_5676_41CF_8FE792E59171",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_779AFF3D_553A_894A_41B6_ABA840537EE1",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658BE339_5A41_5676_4195_9443082BAF95",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_779AFF3D_553A_894A_41B6_ABA840537EE1",
 {
  "id": "effect_779AAF3D_553A_894A_41D3_E298C3D38F3B",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658B2339_5A41_5676_41A0_E835C63044C2",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_779AAF3D_553A_894A_41D3_E298C3D38F3B",
 {
  "id": "effect_76650F3E_553A_8946_41C2_7E9FE84BB636",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658B7339_5A41_5676_41D6_A2A2268854A2",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_76650F3E_553A_8946_41C2_7E9FE84BB636",
 {
  "id": "effect_7665CF3E_553A_8946_41CA_38626EF15A12",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658B433A_5A41_566A_41D0_20CBD1F3AD8F",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7665CF3E_553A_8946_41CA_38626EF15A12",
 {
  "id": "effect_7264C1F6_4FC9_8BF6_41D3_3406BD33533A",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7264C1F6_4FC9_8BF6_41D3_3406BD33533A",
 {
  "id": "effect_6588F33A_5A41_566A_418A_DEECD5E7CC78",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_726461F7_4FC9_8BF6_41C5_73FA0E92B63A",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_726461F7_4FC9_8BF6_41C5_73FA0E92B63A",
 {
  "id": "effect_6588233A_5A41_566A_41D2_B7946004B737",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40B551D5_5695_68D4_41BA_B22B99BE53D5",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6588733B_5A41_566A_41C4_0D1FE6C6AAB8",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B551D5_5695_68D4_41BA_B22B99BE53D5",
 {
  "id": "effect_40B5B1D6_5695_68D4_41BE_E930F5807F1E",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B5B1D6_5695_68D4_41BE_E930F5807F1E",
 {
  "id": "effect_6589F33B_5A41_566A_41CB_B9E99EBD1E85",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40B5F1D6_5695_68D4_41B3_5F75C52C7C8E",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_658B633C_5A41_566E_41C2_C4E3D65F4BF4",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B5F1D6_5695_68D4_41B3_5F75C52C7C8E",
 {
  "id": "effect_40B5D1D7_5695_68D4_41C5_3CFF9D0F8075",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6588B33C_5A41_566E_41C5_B4426BA42218",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B5D1D7_5695_68D4_41C5_3CFF9D0F8075",
 {
  "id": "effect_726431F8_4FC9_8BFA_41CA_55EA2BE0E8C6",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6588533D_5A41_566E_41B0_25E7C4289B6E",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_726431F8_4FC9_8BFA_41CA_55EA2BE0E8C6",
 {
  "id": "effect_71B0F593_4211_A0A0_418E_AFD082FA622B",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71B0F593_4211_A0A0_418E_AFD082FA622B",
 {
  "id": "effect_6589F33D_5A41_566E_41B5_59C17A11F6FB",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5E19C4B4_556A_EC1D_41D1_A2A708D8EAA3",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5E19C4B4_556A_EC1D_41D1_A2A708D8EAA3",
 {
  "id": "effect_6589133D_5A41_566E_41BA_F647F61056E8",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5E1994B4_556A_EC1D_41BA_6E287D4B2DC5",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6589633E_5A41_566A_41A7_06B3E76141CD",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5E1994B4_556A_EC1D_41BA_6E287D4B2DC5",
 {
  "id": "effect_5CEB9C9D_4232_A0A0_4182_47BCA14283F7",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5CEB9C9D_4232_A0A0_4182_47BCA14283F7",
 {
  "id": "effect_6476933E_5A41_566A_41D4_E4876E9052CC",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_41DE1680_5507_FB3A_41D5_191A2AC8DF50",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_41DE1680_5507_FB3A_41D5_191A2AC8DF50",
 {
  "id": "effect_6476E33F_5A41_566A_41BC_7C507275E6CC",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_41DFF681_5507_FB3A_41CA_29611E76A119",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_41DFF681_5507_FB3A_41CA_29611E76A119",
 {
  "id": "effect_6476333F_5A41_566A_4185_CC0C080EE799",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7666EF42_553A_893E_41C0_918A27244B84",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6476533F_5A41_566A_41C7_3659E0870E08",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7666EF42_553A_893E_41C0_918A27244B84",
 {
  "id": "effect_76615F42_553A_893E_41CA_F9F9CB909ECA",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6477A340_5A41_5616_41CA_29D0F3E71036",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_76615F42_553A_893E_41CA_F9F9CB909ECA",
 {
  "id": "effect_76678F43_553A_893E_41CF_230AFDC24DDC",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6477F340_5A41_5616_418D_02D8332F7F28",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_76678F43_553A_893E_41CF_230AFDC24DDC",
 {
  "id": "effect_76664F43_553A_893D_41CD_281B8D1C914E",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6477C340_5A41_5617_41D1_8A712982CDA1",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_76664F43_553A_893D_41CD_281B8D1C914E",
 {
  "id": "effect_726591F9_4FC9_8BFA_41AD_697A944F3807",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_726591F9_4FC9_8BFA_41AD_697A944F3807",
 {
  "id": "effect_64776341_5A41_5616_41C5_3C36871E400F",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7265C1FA_4FC9_8BFE_41D0_249438D9ACE6",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7265C1FA_4FC9_8BFE_41D0_249438D9ACE6",
 {
  "id": "effect_6474A341_5A41_5616_41C4_2E558031DBA2",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40B5D1DC_5695_68D4_41C1_E888CB003076",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6474C342_5A41_561A_41D5_915AEF2722CD",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B5D1DC_5695_68D4_41C1_E888CB003076",
 {
  "id": "effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34",
 {
  "id": "effect_64742342_5A41_561A_41BE_EABF4779F0A7",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40B401DD_5695_68D4_41B7_5BFD96443315",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64744342_5A41_561B_41CA_A263BEBA4908",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B401DD_5695_68D4_41B7_5BFD96443315",
 {
  "id": "effect_40B471DE_5695_68D4_41C4_215F0D1DFFA2",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64758343_5A41_561A_41C3_C928AB683355",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B471DE_5695_68D4_41C4_215F0D1DFFA2",
 {
  "id": "effect_726651FB_4FC9_8BFE_41B0_507650F7FA47",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64728344_5A41_561E_41C2_AF431E8D1081",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_726651FB_4FC9_8BFE_41B0_507650F7FA47",
 {
  "id": "effect_71B06595_4211_A0A0_41AF_5A05C1CE96AC",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71B06595_4211_A0A0_41AF_5A05C1CE96AC",
 {
  "id": "effect_6472D344_5A41_561E_41BC_4AD47B01DE92",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5E1834B9_556A_EC17_41D2_9430EB548F52",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5E1834B9_556A_EC17_41D2_9430EB548F52",
 {
  "id": "effect_64721344_5A41_561E_41C5_4C9DC428EFEF",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5E18C4BA_556A_EC15_41B0_993036CBA4D3",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64725345_5A41_561E_41C9_94DC5E82C390",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5E18C4BA_556A_EC15_41B0_993036CBA4D3",
 {
  "id": "effect_5CEB3C9F_4232_A0A0_419A_6B51F183C876",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5CEB3C9F_4232_A0A0_419A_6B51F183C876",
 {
  "id": "effect_6475D345_5A41_561E_41D6_428AC284BC16",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_41DD6684_5507_FB3A_41D3_DD4B57C8BB93",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_41DD6684_5507_FB3A_41D3_DD4B57C8BB93",
 {
  "id": "effect_64751345_5A41_561E_41C9_7AC14FDA350D",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_41DD0684_5507_FB3A_41CD_43AD81E812D7",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_41DD0684_5507_FB3A_41CD_43AD81E812D7",
 {
  "id": "effect_6472A346_5A41_561A_41CE_1AE0785D4FB4",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_76631F47_553A_89C6_41CE_1E3AAAF846A7",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6472F346_5A41_561A_41C0_28FAA1449BB3",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_76631F47_553A_89C6_41CE_1E3AAAF846A7",
 {
  "id": "effect_7663FF48_553A_89CA_41CF_8F6414C201B4",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64723347_5A41_561A_41C2_803421838442",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7663FF48_553A_89CA_41CF_8F6414C201B4",
 {
  "id": "effect_76627F48_553A_89CA_41BE_08724A507BBD",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64720347_5A41_561A_41C1_831B71B1C82E",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_76627F48_553A_89CA_41BE_08724A507BBD",
 {
  "id": "effect_76622F49_553A_89CA_4193_06F419E1E872",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64725347_5A41_561A_41B1_84F6F457259E",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_76622F49_553A_89CA_4193_06F419E1E872",
 {
  "id": "effect_726711FC_4FC9_8BFA_41B4_84CA982A4B68",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_726711FC_4FC9_8BFA_41B4_84CA982A4B68",
 {
  "id": "effect_6473A347_5A41_5619_4197_7EBC91C82506",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_726751FD_4FC9_8BFA_41CC_B39E07B66A99",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_726751FD_4FC9_8BFA_41CC_B39E07B66A99",
 {
  "id": "effect_6473C348_5A41_5616_41C3_08C12E24276B",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40B3B1E3_5695_68EC_41C7_C902A56D8A5C",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64736348_5A41_5616_41D0_9E67A8AB88A7",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B3B1E3_5695_68EC_41C7_C902A56D8A5C",
 {
  "id": "effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7",
 {
  "id": "effect_6470B349_5A41_5616_41D1_D0E65FA9A5FD",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40B451E4_5695_68F4_41C3_8E61F5DD4411",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6470D349_5A41_5616_41C2_E72E32D86004",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B451E4_5695_68F4_41C3_8E61F5DD4411",
 {
  "id": "effect_40B481E4_5695_68F5_41D1_1E48168FD3C5",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64702349_5A41_5616_41D3_43E200F6AE0B",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B481E4_5695_68F5_41D1_1E48168FD3C5",
 {
  "id": "effect_7259D1FE_4FC9_8BF6_41CF_DB27A5C12535",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6471C34A_5A41_562A_41D5_C26287F31618",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7259D1FE_4FC9_8BF6_41CF_DB27A5C12535",
 {
  "id": "effect_71B38597_4211_A0A0_4180_89B4D6D90C2E",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71B38597_4211_A0A0_4180_89B4D6D90C2E",
 {
  "id": "effect_6471034A_5A41_562A_41D4_F98653B1C234",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5E1E14BF_556A_EC0B_41C8_3FCB5AED267C",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5E1E14BF_556A_EC0B_41C8_3FCB5AED267C",
 {
  "id": "effect_647EB34B_5A41_562A_41CE_B21A4066292F",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5E1ED4C0_556A_EC75_41C5_8ED0EF18D6DF",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647E934B_5A41_562A_41B4_DB9A62239530",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5E1ED4C0_556A_EC75_41C5_8ED0EF18D6DF",
 {
  "id": "effect_5CEAFCA0_4232_A0E1_41C6_589373582369",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_5CEAFCA0_4232_A0E1_41C6_589373582369",
 {
  "id": "effect_647E234B_5A41_5629_41B7_6538DD5EF830",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_41DAA688_5507_FB4A_41C7_B00D12B1851C",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_41DAA688_5507_FB4A_41C7_B00D12B1851C",
 {
  "id": "effect_647E734C_5A41_562E_4197_31AB7C2860C2",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_41DA6688_5507_FB4A_41C7_96F748C2664C",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_41DA6688_5507_FB4A_41C7_96F748C2664C",
 {
  "id": "effect_647E534C_5A41_562E_41CD_01DFA211B777",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_766DBF4D_553A_89CA_41C1_6179891B36AF",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647F834C_5A41_562E_41CA_E64B4C75F4D9",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_766DBF4D_553A_89CA_41C1_6179891B36AF",
 {
  "id": "effect_766C6F4D_553A_89CA_41D0_B1E056BC8D9B",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647FC34D_5A41_562E_41C4_E008515BD10C",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_766C6F4D_553A_89CA_41D0_B1E056BC8D9B",
 {
  "id": "effect_766C2F4E_553A_89C6_41D5_2DB544CB9DBD",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647F734D_5A41_562E_41C6_959DE79821E8",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_766C2F4E_553A_89C6_41D5_2DB544CB9DBD",
 {
  "id": "effect_766C8F4E_553A_89C6_41CD_09EA7ADE4415",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647F534D_5A41_562E_41BA_611BE5BDB7F8",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_766C8F4E_553A_89C6_41CD_09EA7ADE4415",
 {
  "id": "effect_725A91FF_4FC9_8BF5_41B7_502D2AAEEB51",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_725A91FF_4FC9_8BF5_41B7_502D2AAEEB51",
 {
  "id": "effect_647CF34E_5A41_562A_41B0_203CC4E311D8",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_725AE200_4FC9_880A_41AA_CF59DBED9A80",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_725AE200_4FC9_880A_41AA_CF59DBED9A80",
 {
  "id": "effect_647E434E_5A41_562A_41C9_E08F8B7E0A5B",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40B231EA_5695_68FC_41BA_C901C332A906",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647FD34F_5A41_562A_41CB_B68896E2090D",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B231EA_5695_68FC_41BA_C901C332A906",
 {
  "id": "effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1",
 {
  "id": "effect_647FC34F_5A41_562A_41BE_E41654133044",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40B261EB_5695_68FC_41D4_AFBF40731950",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647F134F_5A41_562A_41D2_FB19B9E3C586",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B261EB_5695_68FC_41D4_AFBF40731950",
 {
  "id": "effect_40B251EB_5695_68FC_41C5_DA3C7FB2FC27",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647CB350_5A41_5636_41D0_97BFA9078C25",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_40B251EB_5695_68FC_41C5_DA3C7FB2FC27",
 {
  "id": "effect_71C44C38_5675_6F14_41C9_81C041298B77",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647C4350_5A41_5636_41D4_5EEB0B2F72B5",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C44C38_5675_6F14_41C9_81C041298B77",
 {
  "id": "effect_71C42C38_5675_6F14_41D1_94887A8CF8D1",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C42C38_5675_6F14_41D1_94887A8CF8D1",
 {
  "id": "effect_647D9351_5A41_5636_41CE_6EC0B3191E3A",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_71C40C39_5675_6F14_41C9_F19C41041CD7",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C40C39_5675_6F14_41C9_F19C41041CD7",
 {
  "id": "effect_647DE351_5A41_5636_41D5_5315AECE5469",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64CAC37F_5677_990B_41BC_3ED16ECB47B4",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647D1351_5A41_5636_41BD_A47D152F7849",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_64CAC37F_5677_990B_41BC_3ED16ECB47B4",
 {
  "id": "effect_71CBFC39_5675_6F14_41C4_44E0D31CAC52",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CBFC39_5675_6F14_41C4_44E0D31CAC52",
 {
  "id": "effect_647D6352_5A41_563A_41C2_4D9FE2E034E1",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_71C53C3A_5675_6F14_41D2_D494E87C35E6",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647D4352_5A41_563A_41D3_51F2CD341D8C",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C53C3A_5675_6F14_41D2_D494E87C35E6",
 {
  "id": "effect_71C4EC3B_5675_6F14_41B6_DFD422A44844",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647AF352_5A41_563A_41D2_7659676221BA",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C4EC3B_5675_6F14_41B6_DFD422A44844",
 {
  "id": "effect_71C4CC3B_5675_6F14_41A1_6C19A8EE6BAE",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647A2353_5A41_563A_41C5_93427197CFFD",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C4CC3B_5675_6F14_41A1_6C19A8EE6BAE",
 {
  "id": "effect_71C4AC3C_5675_6F0C_41D2_FB34B665FF51",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647A0353_5A41_563A_41CF_5142CD1DB50C",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C4AC3C_5675_6F0C_41D2_FB34B665FF51",
 {
  "id": "effect_71C48C3C_5675_6F0C_41BF_5344818BB903",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647BA353_5A41_5639_41D6_22D67EB07D7F",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C48C3C_5675_6F0C_41BF_5344818BB903",
 {
  "id": "effect_71C47C3D_5675_6F0C_41CF_1C7196C6DE79",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_647BE354_5A41_563E_41D1_E93B759779EB",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C47C3D_5675_6F0C_41CF_1C7196C6DE79",
 {
  "id": "effect_71C40C3D_5675_6F0C_41CA_221F8D99D9A6",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C40C3D_5675_6F0C_41CA_221F8D99D9A6",
 {
  "id": "effect_647B1354_5A41_563E_41CA_CA069018A7DA",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_71CBCC3E_5675_6F0C_41BB_AA9EC38FA333",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CBCC3E_5675_6F0C_41BB_AA9EC38FA333",
 {
  "id": "effect_647B5354_5A41_563F_41D4_895A2A14B8D2",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_71CBAC3F_5675_6F0C_41C3_4BC30C9FECC4",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CBAC3F_5675_6F0C_41C3_4BC30C9FECC4",
 {
  "id": "effect_64789355_5A41_563E_41B1_7458CC7B7973",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_71CB6C3F_5675_6F0C_41D0_854FD3D4AAB0",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CB6C3F_5675_6F0C_41D0_854FD3D4AAB0",
 {
  "id": "effect_64788355_5A41_563E_41CC_5484242C981C",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_41CE9BF1_567B_38EC_4194_6A36FD27C15F",
  "class": "SlideInEffect",
  "duration": 1000,
  "easing": "cubic_out",
  "from": "top"
 },
 "this.effect_41CE9BF1_567B_38EC_4194_6A36FD27C15F",
 {
  "id": "effect_64782356_5A41_563A_41C4_173876D6B846",
  "class": "SlideOutEffect",
  "duration": 1000,
  "easing": "cubic_out",
  "to": "top"
 },
 {
  "id": "effect_71CB3C40_5675_6F74_41C9_03F106DB52FC",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64785356_5A41_563A_41C9_E2AB2B58127B",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CB3C40_5675_6F74_41C9_03F106DB52FC",
 {
  "id": "effect_71CACC41_5675_6F74_41B6_52F4F2B26322",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6479A356_5A41_563A_41D3_C1A6A79B84FA",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CACC41_5675_6F74_41B6_52F4F2B26322",
 {
  "id": "effect_71C45C41_5675_6F74_41D5_7BFE4EFCAC53",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C45C41_5675_6F74_41D5_7BFE4EFCAC53",
 {
  "id": "effect_6479C357_5A41_563A_41C2_6C7708A4499A",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_71C43C42_5675_6F74_41CA_30D59D0D6443",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64791357_5A41_563A_41D1_4472EAD192FD",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C43C42_5675_6F74_41CA_30D59D0D6443",
 {
  "id": "effect_71CBEC42_5675_6F75_41BB_8AB9D428F376",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CBEC42_5675_6F75_41BB_8AB9D428F376",
 {
  "id": "effect_64796357_5A41_5639_41C6_3C2B9EBEFBC7",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_71CBCC43_5675_6F74_41C5_5446C930C092",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CBCC43_5675_6F74_41C5_5446C930C092",
 {
  "id": "effect_64782358_5A41_5636_41D4_2B09517847CC",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_71CB8C44_5675_6F7C_41BB_33B02D6F19F5",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64793359_5A41_5636_41BC_71E6A536369B",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CB8C44_5675_6F7C_41BB_33B02D6F19F5",
 {
  "id": "effect_71CB4C44_5675_6F7D_41D4_A56DF9412857",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CB4C44_5675_6F7D_41D4_A56DF9412857",
 {
  "id": "effect_64791359_5A41_5636_41C4_57643A05BF4B",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_71CB3C45_5675_6F7C_41D2_95CAA49CBA82",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CB3C45_5675_6F7C_41D2_95CAA49CBA82",
 {
  "id": "effect_64795359_5A41_5636_41D6_AF84825E8176",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64CB4387_5677_99FB_41C0_5E9ABA4BE93A",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6466F35A_5A41_562A_41A7_2D781D31B9E6",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_64CB4387_5677_99FB_41C0_5E9ABA4BE93A",
 {
  "id": "effect_71CAFC46_5675_6F7C_417E_DDE9F7FA378C",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CAFC46_5675_6F7C_417E_DDE9F7FA378C",
 {
  "id": "effect_6466335A_5A41_562A_41C8_D362F08B419A",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_71CAAC46_5675_6F7C_41A3_D2180B2ED0EA",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6466035A_5A41_562B_4177_BB251B31BCD8",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CAAC46_5675_6F7C_41A3_D2180B2ED0EA",
 {
  "id": "effect_71CA8C47_5675_6F7C_41BB_AEAB1454686A",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6467B35B_5A41_562A_41D2_4250B394B592",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CA8C47_5675_6F7C_41BB_AEAB1454686A",
 {
  "id": "effect_71CA6C47_5675_6F7C_41D0_C11256CAF3B8",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6467835B_5A41_562A_41C2_6CAF8A48DE86",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CA6C47_5675_6F7C_41D0_C11256CAF3B8",
 {
  "id": "effect_71CA2C48_5675_6F74_41C3_76BA544887DF",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6467C35B_5A41_5629_41D1_3E1B6398E932",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CA2C48_5675_6F74_41C3_76BA544887DF",
 {
  "id": "effect_71CB8C48_5675_6F75_41D0_BA164D8AACEA",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6467735C_5A41_562E_41CC_17BA1113A6F5",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CB8C48_5675_6F75_41D0_BA164D8AACEA",
 {
  "id": "effect_71CB6C49_5675_6F74_41D0_22BF2B45AC93",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6467435C_5A41_562E_41CB_7582F3985A32",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CB6C49_5675_6F74_41D0_22BF2B45AC93",
 {
  "id": "effect_71CB5C4A_5675_6F74_41BB_8190A3209C1F",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CB5C4A_5675_6F74_41BB_8190A3209C1F",
 {
  "id": "effect_6464835C_5A41_562F_41AE_118684D33304",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_71CB0C4A_5675_6F74_41B7_AB47F38F2527",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CB0C4A_5675_6F74_41B7_AB47F38F2527",
 {
  "id": "effect_6464C35D_5A41_562E_41D4_F2CB59FB1CF5",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_71CAFC4B_5675_6F74_41CA_8A7752BEB6D3",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CAFC4B_5675_6F74_41CA_8A7752BEB6D3",
 {
  "id": "effect_6464135D_5A41_562E_41D0_12B332A4C59C",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_71CABC4B_5675_6F74_41C7_F18911B6E65A",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CABC4B_5675_6F74_41C7_F18911B6E65A",
 {
  "id": "effect_6464635D_5A41_5629_41D0_165D50B4FE7D",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_41CAABF9_567B_38DC_4198_B99575EB9FCA",
  "class": "SlideInEffect",
  "duration": 1000,
  "easing": "cubic_out",
  "from": "bottom"
 },
 "this.effect_41CAABF9_567B_38DC_4198_B99575EB9FCA",
 {
  "id": "effect_6465A35E_5A41_562A_41D3_04B4C691A62B",
  "class": "SlideOutEffect",
  "duration": 1000,
  "easing": "cubic_out",
  "to": "bottom"
 },
 {
  "id": "effect_71CA3C4C_5675_6F0C_41B8_EA963742928E",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6465D35E_5A41_562A_41C4_F74F65B8807C",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71CA3C4C_5675_6F0C_41B8_EA963742928E",
 {
  "id": "effect_71C9EC4D_5675_6F0C_41C3_7A98842B70D2",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6465135E_5A41_562B_41D4_0A9FB8A7B0BE",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C9EC4D_5675_6F0C_41C3_7A98842B70D2",
 {
  "id": "effect_71C9AC4D_5675_6F0F_41D3_2C350CFFB2F2",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6465535F_5A41_562A_41D5_9B48BC2FE023",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C9AC4D_5675_6F0F_41D3_2C350CFFB2F2",
 {
  "id": "effect_4CE7BAF0_569B_38EC_41B6_8C7B91E08C40",
  "class": "SlideInEffect",
  "duration": 1000,
  "easing": "cubic_out",
  "from": "top"
 },
 "this.effect_4CE7BAF0_569B_38EC_41B6_8C7B91E08C40",
 {
  "id": "effect_6462E35F_5A41_562A_41D1_58AB2253189F",
  "class": "SlideOutEffect",
  "duration": 1000,
  "easing": "cubic_out",
  "to": "top"
 },
 {
  "id": "effect_71C94C4F_5675_6F0C_41D3_622785F10B00",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C94C4F_5675_6F0C_41D3_622785F10B00",
 {
  "id": "effect_64623360_5A41_5616_41CE_D8682E62F26F",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_71C92C4F_5675_6F0C_41C7_4547646F281E",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_71C92C4F_5675_6F0C_41C7_4547646F281E",
 {
  "id": "effect_64626360_5A41_5616_41CB_6B9273396AC7",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_4BD8F14B_5597_E40A_41B3_55F825C95BBB",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64635361_5A41_5616_41B0_EEE599E95D9F",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4BD8F14B_5597_E40A_41B3_55F825C95BBB",
 {
  "id": "effect_4BD8B14C_5597_E40D_4190_117674B71D23",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6462C361_5A41_5616_41A8_BA08B0E95C67",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4BD8B14C_5597_E40D_4190_117674B71D23",
 {
  "id": "effect_4BD8114D_5597_E40F_41D1_34C7BBE707C6",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64621361_5A41_5616_419B_F90EA5A11987",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4BD8114D_5597_E40F_41D1_34C7BBE707C6",
 {
  "id": "effect_4BD8214D_5597_E40F_41B9_D50CF2B4F416",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4BD8214D_5597_E40F_41B9_D50CF2B4F416",
 {
  "id": "effect_64626362_5A41_561A_41D4_CE76CC0C4AF8",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_4BD9E14E_5597_E40D_41CB_5F7E3FC7FC6D",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4BD9E14E_5597_E40D_41CB_5F7E3FC7FC6D",
 {
  "id": "effect_6463A362_5A41_561A_41C7_19ED93B6FB4E",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_4BDAC14F_5597_E40B_41B7_A26869342FF3",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6460A362_5A41_561B_41BE_146FBB4CF3B8",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4BDAC14F_5597_E40B_41B7_A26869342FF3",
 {
  "id": "effect_7E316332_51AF_2B2D_419B_C1E4901A999F",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6460E363_5A41_561A_41D0_E952F5EEFDFF",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7E316332_51AF_2B2D_419B_C1E4901A999F",
 {
  "id": "effect_7675FF57_553A_89C6_41A9_CE1353BBF600",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64603363_5A41_561A_41D0_793AE324DF64",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7675FF57_553A_89C6_41A9_CE1353BBF600",
 {
  "id": "effect_7E309333_51AF_2B13_41C7_2F13138DBABC",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64600364_5A41_561E_41CA_BFCBA90A6AC6",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7E309333_51AF_2B13_41C7_2F13138DBABC",
 {
  "id": "effect_76741F58_553A_89CA_41D3_03D1D15ED197",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_6461A364_5A41_561E_41C1_27FB446D3FA1",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_76741F58_553A_89CA_41D3_03D1D15ED197",
 {
  "id": "effect_40DF16C5_5161_6D76_41CE_23717A708B39",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40DF66C6_5161_6D75_4191_1EB238710CC7",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40DF46C6_5161_6D75_4178_022F57B6BB96",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_40DFB6C6_5161_6D75_4100_CA059BCAE420",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_3C286B3E_51A2_9975_41C0_005CB61B26B7",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_02ADB2EB_5065_8B13_41C8_6FDF308C307F",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_3C287B3E_51A2_9972_41B7_656605B0E8B4",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5C2A3BF3_5161_7B13_41C8_BD6DC8221933",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_02AA32EA_5065_8B1D_41D3_7CCD4EFB78A2",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_02ADF2EA_5065_8B1D_41D2_CEA58E6CE320",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_386801D4_51E2_8935_417D_BAC8BBA751DE",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5C2AABF4_5161_7B15_41D3_D6AE4A0ECFC1",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5C2ABBF4_5161_7B15_41C5_B9136ACE46A5",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_5C2A8BF4_5161_7B15_41D4_11BB99605814",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_7D08104C_51A1_2575_41B6_6337FC1F9382",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_64615365_5A41_561E_41C7_8BDFB9907440",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_7D08104C_51A1_2575_41B6_6337FC1F9382",
 {
  "id": "effect_77794990_5161_67ED_41B0_94BBED414FC4",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_777EB990_5161_67ED_41A9_907A812EB140",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_4C3D4A8B_5161_25F3_41C3_4B9594B0BE8F",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_777EA990_5161_67EE_41C3_34CC041F734E",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_4BDCA151_5597_E416_41CA_282652C6B398",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_646E5365_5A41_5619_41D5_8F95152B1986",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4BDCA151_5597_E416_41CA_282652C6B398",
 {
  "id": "effect_4BDC4152_5597_E415_41A5_7C0E67C18C40",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_646F8366_5A41_561A_41C1_FB0537F5B489",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4BDC4152_5597_E415_41A5_7C0E67C18C40",
 {
  "id": "effect_4BDB8153_5597_E41B_41C8_D92EADDDA0D3",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_646F3366_5A41_561A_41B9_89C58C3EE6F0",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4BDB8153_5597_E41B_41C8_D92EADDDA0D3",
 {
  "id": "effect_4BDB4153_5597_E41B_41CE_618C89EAE4E5",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4BDB4153_5597_E41B_41CE_618C89EAE4E5",
 {
  "id": "effect_646F1367_5A41_561A_41CB_67A02EFD5E86",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_4BDB6154_5597_E41D_41A2_44336346A7AA",
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_4BDB6154_5597_E41D_41A2_44336346A7AA",
 {
  "id": "effect_646F4367_5A41_561A_41C5_5D50DDD85D85",
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_763ECAF9_51F1_13D6_417F_A7341F095AAF.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_763ECAF9_51F1_13D6_417F_A7341F095AAF.webm"
  },
  "label": "intro video",
  "width": 1920,
  "loop": true,
  "id": "video_763ECAF9_51F1_13D6_417F_A7341F095AAF",
  "height": 1080,
  "thumbnailUrl": "media/video_763ECAF9_51F1_13D6_417F_A7341F095AAF_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "MediaAudio",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_3DA9E88E_2B19_A500_41C0_6174A05A143F.ogg",
   "mp3Url": "media/audio_3DA9E88E_2B19_A500_41C0_6174A05A143F.mp3"
  },
  "id": "audio_3DA9E88E_2B19_A500_41C0_6174A05A143F",
  "autoplay": true
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_5E3784F9_556A_EC17_41B7_E48B8923D7AF.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_5E3784F9_556A_EC17_41B7_E48B8923D7AF.webm"
  },
  "label": "intro video",
  "width": 1920,
  "loop": false,
  "id": "video_5E3784F9_556A_EC17_41B7_E48B8923D7AF",
  "height": 1080,
  "thumbnailUrl": "media/video_5E3784F9_556A_EC17_41B7_E48B8923D7AF_t.jpg",
  "scaleMode": "fit_inside"
 }
], "children": [
 {
  "progressLeft": 0,
  "playbackBarProgressOpacity": 0,
  "progressBackgroundOpacity": 0,
  "playbackBarBottom": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBorderColor": "#AAAAAA",
  "toolTipShadowColor": "#333333",
  "playbackBarOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarBackgroundOpacity": 0,
  "progressBarOpacity": 0,
  "playbackBarBorderSize": 0,
  "toolTipFontFamily": "Arial",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBarBackgroundColor": [
   "#0066B3",
   "#6BA13C"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "progressBottom": 0,
  "toolTipFontSize": 12,
  "progressHeight": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderRadius": 3,
  "playbackBarBackgroundColor": [
   "#0066B3",
   "#71A348"
  ],
  "toolTipBackgroundColor": "#FFFFFF",
  "toolTipPaddingLeft": 6,
  "paddingTop": 0,
  "minWidth": 100,
  "playbackBarHeight": 0,
  "minHeight": 50,
  "borderSize": 0,
  "height": "100%",
  "playbackBarHeadShadowColor": "#000000",
  "width": "100%",
  "playbackBarHeadShadowHorizontalLength": 0,
  "paddingRight": 0,
  "playbackBarHeadWidth": 6,
  "paddingBottom": 0,
  "progressBorderSize": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "playbackBarRight": 0,
  "progressOpacity": 1,
  "progressBarBorderRadius": 0,
  "progressRight": 0,
  "progressBarBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarLeft": 0,
  "top": 0,
  "id": "MainViewer",
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBackgroundColorDirection": "horizontal",
  "toolTipOpacity": 1,
  "playbackBarHeadHeight": 30,
  "playbackBarProgressBorderRadius": 0,
  "shadow": false,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadowOpacity": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "class": "ViewerArea",
  "paddingLeft": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontStyle": "normal",
  "toolTipPaddingRight": 6,
  "transitionMode": "fade_out_fade_in",
  "progressBarBorderColor": "#000000",
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "toolTipFontWeight": "normal",
  "playbackBarBorderColor": "#AAAAAA",
  "borderRadius": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBorderRadius": 0,
  "left": 0,
  "progressBackgroundColorDirection": "vertical"
 },
 {
  "backgroundOpacity": 1,
  "bottom": "0%",
  "shadowBlurRadius": 6,
  "id": "Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927",
  "scrollBarMargin": 2,
  "maxWidth": 500,
  "scrollBarVisible": "rollOver",
  "maxHeight": 2000,
  "backgroundColor": [
   "#005B9E",
   "#6AA744"
  ],
  "shadow": true,
  "scrollBarWidth": 10,
  "contentOpaque": false,
  "visible": false,
  "shadowVerticalLength": 0,
  "horizontalAlign": "center",
  "layout": "vertical",
  "class": "Container",
  "backgroundColorDirection": "horizontal",
  "paddingLeft": 0,
  "shadowSpread": 1,
  "children": [
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "id": "Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "shadow": false,
    "contentOpaque": false,
    "horizontalAlign": "right",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundOpacity": 0,
      "id": "Image_06E95D0A_2894_7324_41C3_E29CB520D1F6",
      "maxWidth": 100,
      "maxHeight": 50,
      "shadow": false,
      "horizontalAlign": "right",
      "paddingLeft": 0,
      "click": "this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, 0, null, null, false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, 0, null, null, false)",
      "class": "Image",
      "paddingTop": 0,
      "minWidth": 1,
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": 50,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_06E95D0A_2894_7324_41C3_E29CB520D1F6.png",
      "paddingBottom": 0,
      "borderRadius": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "5.423%",
    "borderRadius": 0,
    "paddingRight": 10,
    "gap": 10,
    "paddingBottom": 0
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "id": "Container_31C84245_28FC_512C_41B2_C8B8A201BAE0",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "layout": "vertical",
    "shadow": false,
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundOpacity": 0,
      "id": "Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03",
      "maxWidth": 1000,
      "maxHeight": 1000,
      "shadow": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "width": "100%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.png",
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "16.157%",
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 0,
    "paddingBottom": 0
   },
   {
    "backgroundOpacity": 0,
    "id": "Image_227442D1_2F53_0813_41B3_7271F7D70452",
    "maxWidth": 1705,
    "maxHeight": 600,
    "shadow": false,
    "horizontalAlign": "center",
    "class": "Image",
    "paddingLeft": 0,
    "paddingTop": 0,
    "minWidth": 5,
    "width": "87.681%",
    "minHeight": 5,
    "verticalAlign": "middle",
    "borderSize": 0,
    "height": "13.558%",
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_227442D1_2F53_0813_41B3_7271F7D70452.png",
    "paddingBottom": 0
   },
   {
    "backgroundOpacity": 0.2,
    "id": "Container_6071FB50_4190_1376_417C_4B895D2ED536",
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#000000",
     "#666666"
    ],
    "scrollBarVisible": "rollOver",
    "maxHeight": 500,
    "maxWidth": 500,
    "shadow": false,
    "scrollBarWidth": 10,
    "contentOpaque": true,
    "horizontalAlign": "center",
    "layout": "horizontal",
    "class": "Container",
    "backgroundColorDirection": "vertical",
    "paddingLeft": 0,
    "children": [
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_62015550_4190_F776_41BA_A0A2769275B2",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "absolute",
      "shadow": false,
      "contentOpaque": true,
      "horizontalAlign": "left",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "backgroundOpacity": 0,
        "id": "Image_62D15ACC_4190_3D6E_41CA_B73B93854AF4",
        "maxWidth": 386,
        "maxHeight": 276,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_4973D6BD_51D1_324E_41C0_AE2C94232344, 'hideEffect', false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, false, 0, this.effect_4973D6BD_51D1_324E_41C0_AE2C94232344, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_4973D6BD_51D1_324E_41C0_AE2C94232344, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_50BC88D7_41F1_A0A0_41C2_DFCE679DE04B, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_50BC88D7_41F1_A0A0_41C2_DFCE679DE04B, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_50BC88D7_41F1_A0A0_41C2_DFCE679DE04B, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_50BC88D7_41F1_A0A0_41C2_DFCE679DE04B, 'showEffect', false)",
        "class": "Image",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "80%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_62D15ACC_4190_3D6E_41CA_B73B93854AF4.png",
        "paddingBottom": 0,
        "left": "0%",
        "top": "0%"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "minHeight": 1,
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_63BC1E1B_4190_14EA_41CB_DE2C9D195E30",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "absolute",
      "shadow": false,
      "contentOpaque": true,
      "horizontalAlign": "left",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "backgroundOpacity": 0,
        "id": "Image_6067E60E_4190_14EA_41B7_6985D6BCDEC5",
        "maxWidth": 759,
        "maxHeight": 133,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_4816F7BE_51D1_124A_41BA_7B4660D3C5D1, 'hideEffect', false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, false, 0, this.effect_4816F7BE_51D1_124A_41BA_7B4660D3C5D1, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_4816F7BE_51D1_124A_41BA_7B4660D3C5D1, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false)",
        "class": "Image",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "100%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_6067E60E_4190_14EA_41B7_6985D6BCDEC5.png",
        "paddingBottom": 0,
        "left": "0%",
        "top": "0%"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "57.971%",
      "minHeight": 1,
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 10,
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "borderRadius": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "height": "10%",
    "paddingRight": 0,
    "gap": 10,
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5
   },
   {
    "backgroundOpacity": 0.2,
    "id": "Container_606C4E88_4190_15D6_4193_D28A5B1565CB",
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#000000",
     "#666666"
    ],
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "scrollBarWidth": 10,
    "shadow": false,
    "contentOpaque": true,
    "horizontalAlign": "center",
    "class": "Container",
    "backgroundColorDirection": "vertical",
    "paddingLeft": 0,
    "children": [
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_63D816B2_4190_153A_41C3_FEEA477D765F",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "absolute",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "left",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "backgroundOpacity": 0,
        "id": "Image_63BEA363_41B0_135A_41BA_22AFB65D8B4A",
        "maxWidth": 218,
        "maxHeight": 344,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, null, null, false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, false, 0, null, null, false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, null, null, false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false)",
        "class": "Image",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "70%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_63BEA363_41B0_135A_41BA_22AFB65D8B4A.png",
        "paddingBottom": 0,
        "left": "0%",
        "top": "0%"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "minHeight": 1,
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_629A266C_4190_352E_419F_7EF6B41B99EA",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "absolute",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "left",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "backgroundOpacity": 0,
        "id": "Image_62DA2260_41B0_6D56_41D0_0BF353C4C127",
        "maxWidth": 759,
        "maxHeight": 133,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, this.effect_49156269_51D3_12F6_41D4_4641DC2CB11A, 'hideEffect', false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, false, 0, this.effect_49156269_51D3_12F6_41D4_4641DC2CB11A, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_49156269_51D3_12F6_41D4_4641DC2CB11A, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false)",
        "class": "Image",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "100%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_62DA2260_41B0_6D56_41D0_0BF353C4C127.png",
        "paddingBottom": 0,
        "left": "0%",
        "top": "0%"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "58.14%",
      "minHeight": 1,
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 10,
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "99.71%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "height": "9.778%",
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 10,
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5
   },
   {
    "backgroundOpacity": 0.2,
    "id": "Container_60B39755_41F0_137E_41C0_0E6E0B2353C9",
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#000000",
     "#666666"
    ],
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "scrollBarWidth": 10,
    "shadow": false,
    "contentOpaque": true,
    "horizontalAlign": "center",
    "class": "Container",
    "backgroundColorDirection": "vertical",
    "paddingLeft": 0,
    "children": [
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_63F3509D_41B0_2DEE_41AE_6EB7468FDF1C",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "absolute",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "left",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "backgroundOpacity": 0,
        "id": "Image_62C990B6_41B3_ED3A_41CA_9542F80D37EE",
        "maxWidth": 1095,
        "maxHeight": 1095,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, this.effect_5F766399_51D7_3256_41C8_8058BFACBDFC, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_5F766399_51D7_3256_41C8_8058BFACBDFC, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_5F766399_51D7_3256_41C8_8058BFACBDFC, 'hideEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C, 'showEffect', false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, true, 0, this.effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C, 'showEffect', false)",
        "class": "Image",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "80%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_62C990B6_41B3_ED3A_41CA_9542F80D37EE.png",
        "paddingBottom": 0,
        "left": "0%",
        "top": "0%"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "minHeight": 1,
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_62EF46AC_41B0_352E_41C3_470A9C137921",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "absolute",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "left",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "backgroundOpacity": 0,
        "id": "Image_6331E052_41B0_2D7A_4195_B0D655B92177",
        "maxWidth": 759,
        "maxHeight": 133,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, this.effect_5F7E6C20_51D1_3677_41A7_5A242A038A1A, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_5F7E6C20_51D1_3677_41A7_5A242A038A1A, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_5F7E6C20_51D1_3677_41A7_5A242A038A1A, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false)",
        "class": "Image",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "99.75%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_6331E052_41B0_2D7A_4195_B0D655B92177.png",
        "paddingBottom": 0,
        "left": "0%",
        "top": "0%"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "58.14%",
      "minHeight": 1,
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 10,
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "99.71%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "height": "9.778%",
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 0,
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "id": "Container_3FB65883_2894_7124_41B7_81A73B20B38D",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "shadow": false,
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundOpacity": 0,
      "id": "Image_31227ABF_2894_515C_41B6_160BDF6DEA3D",
      "maxWidth": 512,
      "maxHeight": 512,
      "shadow": false,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.openLink(\"https://www.naturalremedy.com/rd/\", \"_blank\")",
      "cursor": "hand",
      "paddingTop": 0,
      "minWidth": 20,
      "width": "15%",
      "minHeight": 20,
      "verticalAlign": "middle",
      "borderSize": 0,
      "class": "Image",
      "height": "22%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.png",
      "paddingBottom": 0
     },
     {
      "backgroundOpacity": 0,
      "id": "Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F",
      "maxWidth": 512,
      "maxHeight": 512,
      "shadow": false,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.openLink(\"https://www.facebook.com/NaturalRemedies.AHP/\", \"_blank\")",
      "cursor": "hand",
      "paddingTop": 0,
      "minWidth": 20,
      "width": "15%",
      "minHeight": 20,
      "verticalAlign": "middle",
      "borderSize": 0,
      "class": "Image",
      "height": "22%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.png",
      "paddingBottom": 0
     },
     {
      "backgroundOpacity": 0,
      "id": "Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F",
      "maxWidth": 512,
      "maxHeight": 512,
      "shadow": false,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.openLink(\"https://www.youtube.com/channel/UC-pz4IQAXsTO7QccbCpSZqg/videos\", \"_blank\")",
      "cursor": "hand",
      "paddingTop": 0,
      "minWidth": 20,
      "width": "15%",
      "minHeight": 20,
      "verticalAlign": "middle",
      "borderSize": 0,
      "class": "Image",
      "height": "22%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.png",
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "paddingTop": 84,
    "minWidth": 5,
    "width": "100%",
    "minHeight": 5,
    "verticalAlign": "bottom",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "30.567%",
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 35,
    "paddingBottom": 30
   }
  ],
  "shadowOpacity": 0.4,
  "minHeight": 100,
  "overflow": "visible",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "minWidth": 100,
  "verticalAlign": "top",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "shadowHorizontalLength": 7,
  "borderRadius": 0,
  "paddingRight": 0,
  "gap": 10,
  "shadowColor": "#000000",
  "paddingBottom": 0,
  "left": "0%",
  "right": "83%",
  "scrollBarOpacity": 0,
  "top": "0%"
 },
 {
  "toolTipShadowBlurRadius": 3,
  "backgroundOpacity": 0,
  "id": "Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D",
  "maxWidth": 500,
  "toolTipOpacity": 1,
  "maxHeight": 500,
  "shadow": false,
  "toolTipBorderSize": 1,
  "toolTipTextShadowBlurRadius": 3,
  "visible": false,
  "toolTipTextShadowOpacity": 0,
  "toolTipPaddingTop": 4,
  "toolTipShadowColor": "#333333",
  "horizontalAlign": "center",
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontFamily": "Arial",
  "paddingLeft": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontStyle": "normal",
  "toolTipFontSize": 12,
  "click": "this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, 0, this.effect_74D59241_4213_63A0_41CB_DA1C684AF71F, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, 0, this.effect_74D59241_4213_63A0_41CB_DA1C684AF71F, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, 0, this.effect_74D59241_4213_63A0_41CB_DA1C684AF71F, 'hideEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, 0, null, null, false); this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, true, 0, null, null, false); this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, 0, null, null, false)",
  "toolTipBorderRadius": 3,
  "toolTip": "Menu",
  "toolTipBackgroundColor": "#FFFFFF",
  "toolTipFontColor": "#606060",
  "toolTipPaddingLeft": 6,
  "class": "Image",
  "paddingTop": 0,
  "minWidth": 100,
  "width": "10%",
  "minHeight": 100,
  "verticalAlign": "middle",
  "borderSize": 0,
  "borderRadius": 0,
  "toolTipBorderColor": "#767676",
  "toolTipPaddingRight": 6,
  "height": "10%",
  "toolTipFontWeight": "normal",
  "paddingRight": 0,
  "scaleMode": "fit_inside",
  "url": "skin/Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.png",
  "toolTipShadowVerticalLength": 0,
  "paddingBottom": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowOpacity": 1,
  "left": "2%",
  "toolTipTextShadowColor": "#000000",
  "top": "3%"
 },
 {
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "bottom": "0%",
  "id": "Container_619C3102_29AC_5324_41C1_3BF76C2BBF06",
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "layout": "absolute",
  "shadow": false,
  "contentOpaque": false,
  "horizontalAlign": "center",
  "class": "Container",
  "paddingLeft": 0,
  "children": [
   {
    "backgroundOpacity": 0.75,
    "bottom": "18.59%",
    "id": "Container_61192088_29AC_5124_4182_B40BFFB7B4C6",
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#006CB5",
     "#71A348"
    ],
    "scrollBarVisible": "rollOver",
    "layout": "vertical",
    "scrollBarWidth": 10,
    "shadow": false,
    "contentOpaque": false,
    "visible": false,
    "class": "Container",
    "backgroundColorDirection": "vertical",
    "paddingLeft": 0,
    "horizontalAlign": "left",
    "children": [
     {
      "backgroundOpacity": 1,
      "id": "Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F",
      "scrollBarMargin": 2,
      "backgroundColor": [
       "#006CB5",
       "#71A348"
      ],
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "scrollBarWidth": 10,
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "backgroundColorDirection": "horizontal",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarMargin": 2,
        "backgroundOpacity": 0,
        "id": "Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A",
        "scrollBarWidth": 10,
        "scrollBarVisible": "rollOver",
        "layout": "absolute",
        "shadow": false,
        "contentOpaque": false,
        "horizontalAlign": "left",
        "class": "Container",
        "paddingLeft": 0,
        "children": [
         {
          "backgroundOpacity": 0,
          "id": "Image_33470F48_2F93_8736_41C7_C471F2C7FF7C",
          "maxWidth": 1753,
          "maxHeight": 133,
          "shadow": false,
          "horizontalAlign": "center",
          "class": "Image",
          "paddingLeft": 0,
          "paddingTop": 0,
          "minWidth": 1,
          "width": "95.278%",
          "minHeight": 1,
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "borderRadius": 0,
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_33470F48_2F93_8736_41C7_C471F2C7FF7C.png",
          "paddingBottom": 0,
          "left": "2.26%",
          "top": "0%"
         }
        ],
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "84.581%",
        "minHeight": 1,
        "verticalAlign": "top",
        "borderSize": 0,
        "scrollBarOpacity": 0.5,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "scrollBarMargin": 2,
        "backgroundOpacity": 0,
        "id": "Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975",
        "scrollBarWidth": 10,
        "scrollBarVisible": "rollOver",
        "layout": "horizontal",
        "shadow": false,
        "contentOpaque": false,
        "horizontalAlign": "center",
        "class": "Container",
        "paddingLeft": 0,
        "children": [
         {
          "toolTipShadowBlurRadius": 3,
          "backgroundOpacity": 0,
          "id": "Image_1256AF34_50A3_7975_41CF_E4D5B01FA15D",
          "maxWidth": 100,
          "toolTipOpacity": 1,
          "maxHeight": 100,
          "shadow": false,
          "toolTipBorderSize": 1,
          "toolTipTextShadowBlurRadius": 3,
          "toolTipTextShadowOpacity": 0,
          "toolTipPaddingTop": 4,
          "toolTipShadowColor": "#333333",
          "horizontalAlign": "center",
          "toolTipShadowHorizontalLength": 0,
          "toolTipFontFamily": "Arial",
          "paddingLeft": 0,
          "toolTipPaddingBottom": 4,
          "toolTipFontStyle": "normal",
          "toolTipFontSize": 12,
          "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, 0, this.effect_15430EDE_505D_7B35_41CA_3F5C176FC215, 'hideEffect', false)",
          "toolTip": "Close",
          "toolTipBackgroundColor": "#F6F6F6",
          "toolTipFontColor": "#606060",
          "toolTipPaddingLeft": 6,
          "class": "Image",
          "paddingTop": 0,
          "minWidth": 10,
          "width": "60%",
          "minHeight": 10,
          "verticalAlign": "middle",
          "borderSize": 0,
          "borderRadius": 0,
          "toolTipBorderColor": "#767676",
          "toolTipPaddingRight": 6,
          "toolTipBorderRadius": 3,
          "height": "60%",
          "toolTipFontWeight": "normal",
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_1256AF34_50A3_7975_41CF_E4D5B01FA15D.png",
          "toolTipShadowVerticalLength": 0,
          "paddingBottom": 0,
          "toolTipShadowSpread": 0,
          "toolTipShadowOpacity": 1,
          "toolTipTextShadowColor": "#000000"
         }
        ],
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "12.755%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "scrollBarOpacity": 0.5,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "gap": 10,
        "paddingBottom": 0
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "100%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "height": "12.627%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 10,
      "paddingBottom": 0,
      "scrollBarOpacity": 0.5
     },
     {
      "backgroundOpacity": 0,
      "id": "Image_61372758_2994_5F24_41C3_CE568D87E54A",
      "maxWidth": 1385,
      "maxHeight": 866,
      "shadow": false,
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "width": "100%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "87.324%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_61372758_2994_5F24_41C3_CE568D87E54A.jpg",
      "paddingBottom": 0
     },
     {
      "backgroundOpacity": 0,
      "id": "Image_6F475BB5_2994_D76C_418F_CE09ACD35F01",
      "maxWidth": 1385,
      "maxHeight": 866,
      "shadow": false,
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "width": "100%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "87.324%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_6F475BB5_2994_D76C_418F_CE09ACD35F01.jpg",
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "vertical",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 20,
      "children": [
       {
        "backgroundOpacity": 0.3,
        "id": "Container_5A65C06B_4F74_E73F_41D1_267D30DF1645",
        "scrollBarMargin": 2,
        "backgroundColor": [
         "#000000",
         "#666666"
        ],
        "scrollBarVisible": "rollOver",
        "maxHeight": 1000,
        "maxWidth": 1000,
        "shadow": false,
        "scrollBarWidth": 10,
        "contentOpaque": false,
        "horizontalAlign": "left",
        "layout": "absolute",
        "class": "Container",
        "backgroundColorDirection": "vertical",
        "paddingLeft": 5,
        "children": [
         {
          "backgroundOpacity": 0,
          "id": "Image_5928948A_4F57_6FF9_41B9_2F0112B06FDD",
          "maxWidth": 2245,
          "maxHeight": 474,
          "shadow": false,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "click": "this.mainPlayList.set('selectedIndex', 0)",
          "class": "Image",
          "paddingTop": 0,
          "minWidth": 1,
          "width": "100%",
          "minHeight": 1,
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "borderRadius": 0,
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_5928948A_4F57_6FF9_41B9_2F0112B06FDD.png",
          "paddingBottom": 0,
          "left": "0%",
          "top": "0%"
         }
        ],
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 100,
        "width": "98%",
        "minHeight": 100,
        "verticalAlign": "top",
        "borderSize": 0,
        "borderRadius": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "height": "25%",
        "paddingRight": 0,
        "gap": 10,
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5
       },
       {
        "backgroundOpacity": 0.3,
        "id": "Container_59F25950_4F6B_196A_41CD_F43855FE820E",
        "scrollBarMargin": 2,
        "backgroundColor": [
         "#000000",
         "#666666"
        ],
        "scrollBarVisible": "rollOver",
        "maxHeight": 1000,
        "maxWidth": 1000,
        "shadow": false,
        "scrollBarWidth": 10,
        "contentOpaque": false,
        "horizontalAlign": "left",
        "layout": "absolute",
        "class": "Container",
        "backgroundColorDirection": "vertical",
        "paddingLeft": 0,
        "children": [
         {
          "backgroundOpacity": 0,
          "id": "Image_596DA0A1_4F57_272B_41C1_5D7F44F03A84",
          "maxWidth": 2245,
          "maxHeight": 474,
          "shadow": false,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "click": "this.mainPlayList.set('selectedIndex', 1)",
          "class": "Image",
          "paddingTop": 0,
          "minWidth": 1,
          "width": "100%",
          "minHeight": 1,
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "borderRadius": 0,
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_596DA0A1_4F57_272B_41C1_5D7F44F03A84.png",
          "paddingBottom": 0,
          "left": "0%",
          "top": "0%"
         }
        ],
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 100,
        "width": "98%",
        "minHeight": 100,
        "verticalAlign": "top",
        "borderSize": 0,
        "borderRadius": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "height": "25%",
        "paddingRight": 0,
        "gap": 10,
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5
       },
       {
        "backgroundOpacity": 0.3,
        "id": "Container_5AEF7944_4F6B_1969_41C6_6A82DE99FA46",
        "scrollBarMargin": 2,
        "backgroundColor": [
         "#000000",
         "#666666"
        ],
        "scrollBarVisible": "rollOver",
        "maxHeight": 1000,
        "maxWidth": 1000,
        "shadow": false,
        "scrollBarWidth": 10,
        "contentOpaque": false,
        "horizontalAlign": "left",
        "layout": "absolute",
        "class": "Container",
        "backgroundColorDirection": "vertical",
        "paddingLeft": 0,
        "children": [
         {
          "backgroundOpacity": 0,
          "id": "Image_5A974EDD_4F57_FB1B_4174_06D927CA67A6",
          "maxWidth": 2245,
          "maxHeight": 474,
          "shadow": false,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "click": "this.mainPlayList.set('selectedIndex', 3)",
          "class": "Image",
          "paddingTop": 0,
          "minWidth": 1,
          "width": "100%",
          "minHeight": 1,
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "borderRadius": 0,
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_5A974EDD_4F57_FB1B_4174_06D927CA67A6.png",
          "paddingBottom": 0,
          "left": "0%",
          "top": "0%"
         }
        ],
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 100,
        "width": "98%",
        "minHeight": 100,
        "verticalAlign": "top",
        "borderSize": 0,
        "borderRadius": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "height": "25%",
        "paddingRight": 0,
        "gap": 10,
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5
       },
       {
        "backgroundOpacity": 0.3,
        "id": "Container_5AAD437C_564E_990C_419E_DF422707301C",
        "scrollBarMargin": 2,
        "backgroundColor": [
         "#000000",
         "#666666"
        ],
        "scrollBarVisible": "rollOver",
        "maxHeight": 1000,
        "maxWidth": 1000,
        "shadow": false,
        "scrollBarWidth": 10,
        "contentOpaque": false,
        "horizontalAlign": "center",
        "layout": "horizontal",
        "class": "Container",
        "backgroundColorDirection": "vertical",
        "paddingLeft": 0,
        "children": [
         {
          "backgroundOpacity": 0,
          "id": "Image_5B6C493A_5652_A914_41C0_FFAC570F4DAA",
          "maxWidth": 2245,
          "maxHeight": 474,
          "shadow": false,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "click": "this.mainPlayList.set('selectedIndex', 10)",
          "class": "Image",
          "paddingTop": 0,
          "minWidth": 1,
          "width": "98%",
          "minHeight": 1,
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "borderRadius": 0,
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_5B6C493A_5652_A914_41C0_FFAC570F4DAA.png",
          "paddingBottom": 0
         }
        ],
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 100,
        "width": "98%",
        "minHeight": 100,
        "verticalAlign": "middle",
        "borderSize": 0,
        "borderRadius": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "height": "25%",
        "paddingRight": 0,
        "gap": 10,
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5
       },
       {
        "backgroundOpacity": 0.3,
        "id": "Container_5AB59E23_5655_AB3B_41C1_2356140C04A7",
        "scrollBarMargin": 2,
        "backgroundColor": [
         "#000000",
         "#666666"
        ],
        "scrollBarVisible": "rollOver",
        "maxHeight": 1000,
        "maxWidth": 1000,
        "shadow": false,
        "scrollBarWidth": 10,
        "contentOpaque": false,
        "horizontalAlign": "left",
        "layout": "absolute",
        "class": "Container",
        "backgroundColorDirection": "vertical",
        "paddingLeft": 0,
        "children": [
         {
          "backgroundOpacity": 0,
          "id": "Image_5BC38697_5653_FB1C_41AB_D4A891936178",
          "maxWidth": 2245,
          "maxHeight": 474,
          "shadow": false,
          "horizontalAlign": "center",
          "paddingLeft": 0,
          "click": "this.mainPlayList.set('selectedIndex', 11)",
          "class": "Image",
          "paddingTop": 0,
          "minWidth": 1,
          "width": "100%",
          "minHeight": 1,
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "borderRadius": 0,
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_5BC38697_5653_FB1C_41AB_D4A891936178.png",
          "paddingBottom": 0,
          "left": "0%",
          "top": "0%"
         }
        ],
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 100,
        "width": "98%",
        "minHeight": 100,
        "verticalAlign": "top",
        "borderSize": 0,
        "borderRadius": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "height": "25%",
        "paddingRight": 0,
        "gap": 10,
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 50,
      "minWidth": 1,
      "width": "100%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "87.415%",
      "borderRadius": 0,
      "paddingRight": 20,
      "gap": 20,
      "paddingBottom": 50
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "minHeight": 1,
    "paddingTop": 0,
    "minWidth": 1,
    "verticalAlign": "top",
    "borderSize": 0,
    "backgroundColorRatios": [
     0.02,
     1
    ],
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 0,
    "paddingBottom": 0,
    "left": "13.86%",
    "right": "28.23%",
    "scrollBarOpacity": 0.5,
    "top": "17.37%"
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "bottom": "2%",
    "id": "Container_619590BA_4005_05E7_41C3_8B4621024A56",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "shadow": false,
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_647D2A27_403F_04ED_41B8_62A899DFCCD0",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "42.607%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 0,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_64F00B6B_403F_1B64_41C6_2E5278BB284E",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "46.498%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 0,
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "minWidth": 10,
    "width": "13.207%",
    "minHeight": 10,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "9.128%",
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 10,
    "paddingBottom": 0,
    "right": "5%"
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "bottom": "5%",
    "id": "Container_552C139E_41F7_60A0_41C0_6D7884D47FA7",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "shadow": false,
    "contentOpaque": true,
    "visible": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 5,
    "children": [
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_3B4D0B8C_51E2_9915_41CF_67764EFA9A3C",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "shadow": false,
      "contentOpaque": true,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       "this.IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B"
      ],
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_41E00F2C_5161_7B35_41C6_BC2399CBF863",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "shadow": false,
      "contentOpaque": true,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "toolTipShadowBlurRadius": 3,
        "backgroundOpacity": 0,
        "id": "IconButton_41096450_516F_2D6D_41C6_3B86CF181E54",
        "maxWidth": 1000,
        "toolTipOpacity": 1,
        "mode": "push",
        "maxHeight": 1000,
        "shadow": false,
        "toolTipBorderSize": 1,
        "toolTipTextShadowBlurRadius": 3,
        "toolTipTextShadowOpacity": 0,
        "toolTipPaddingTop": 4,
        "toolTipShadowColor": "#333333",
        "horizontalAlign": "center",
        "toolTipShadowHorizontalLength": 0,
        "rollOverIconURL": "skin/IconButton_41096450_516F_2D6D_41C6_3B86CF181E54_rollover.png",
        "toolTipFontFamily": "Arial",
        "paddingLeft": 0,
        "toolTipPaddingBottom": 4,
        "toolTipFontStyle": "normal",
        "toolTipFontSize": 12,
        "click": "this.setMediaBehaviour(this.playList_1BD491A7_5A41_521A_41C4_15F74C2BD61F, 0); this.MainViewerVideoPlayer.play()",
        "toolTip": "Department Head Video",
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontColor": "#606060",
        "toolTipPaddingLeft": 6,
        "cursor": "hand",
        "paddingTop": 0,
        "minWidth": 200,
        "width": "88%",
        "minHeight": 200,
        "verticalAlign": "middle",
        "borderSize": 0,
        "borderRadius": 0,
        "toolTipBorderColor": "#767676",
        "class": "IconButton",
        "toolTipBorderRadius": 3,
        "iconURL": "skin/IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.png",
        "toolTipFontWeight": "normal",
        "paddingRight": 0,
        "toolTipShadowVerticalLength": 0,
        "toolTipPaddingRight": 6,
        "height": "98%",
        "pressedIconURL": "skin/IconButton_41096450_516F_2D6D_41C6_3B86CF181E54_pressed.png",
        "paddingBottom": 0,
        "toolTipShadowSpread": 0,
        "toolTipShadowOpacity": 1,
        "transparencyActive": true,
        "toolTipTextShadowColor": "#000000"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "50%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 0,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "shadow": false,
      "contentOpaque": true,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "toolTipShadowBlurRadius": 3,
        "backgroundOpacity": 0,
        "id": "IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E",
        "maxWidth": 1000,
        "toolTipOpacity": 1,
        "mode": "push",
        "maxHeight": 1000,
        "shadow": false,
        "toolTipBorderSize": 1,
        "toolTipTextShadowBlurRadius": 3,
        "toolTipTextShadowOpacity": 0,
        "toolTipPaddingTop": 4,
        "toolTipShadowColor": "#333333",
        "horizontalAlign": "center",
        "toolTipShadowHorizontalLength": 0,
        "rollOverIconURL": "skin/IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E_rollover.png",
        "toolTipFontFamily": "Arial",
        "paddingLeft": 0,
        "toolTipPaddingBottom": 4,
        "toolTipFontStyle": "normal",
        "toolTipFontSize": 12,
        "click": "this.setMediaBehaviour(this.playList_1BD421A7_5A41_521A_4191_23A888E75A0E, 0); this.MainViewerVideoPlayer.play()",
        "toolTip": "Department Head Video",
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontColor": "#606060",
        "toolTipPaddingLeft": 6,
        "cursor": "hand",
        "paddingTop": 0,
        "minWidth": 200,
        "width": "88%",
        "minHeight": 200,
        "verticalAlign": "middle",
        "borderSize": 0,
        "borderRadius": 0,
        "toolTipBorderColor": "#767676",
        "class": "IconButton",
        "toolTipBorderRadius": 3,
        "iconURL": "skin/IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.png",
        "toolTipFontWeight": "normal",
        "paddingRight": 0,
        "toolTipShadowVerticalLength": 0,
        "toolTipPaddingRight": 6,
        "height": "98%",
        "pressedIconURL": "skin/IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E_pressed.png",
        "paddingBottom": 0,
        "toolTipShadowSpread": 0,
        "toolTipShadowOpacity": 1,
        "transparencyActive": true,
        "toolTipTextShadowColor": "#000000"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "50%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 0,
      "paddingBottom": 0
     },
     {
      "backgroundOpacity": 0,
      "shadowBlurRadius": 6,
      "id": "Container_395C4B78_51E3_79FD_4190_8DD908FD8F27",
      "scrollBarMargin": 2,
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "shadow": true,
      "contentOpaque": true,
      "shadowVerticalLength": 0,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "shadowSpread": 1,
      "children": [
       {
        "toolTipShadowBlurRadius": 3,
        "backgroundOpacity": 0,
        "id": "IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3",
        "maxWidth": 1000,
        "toolTipOpacity": 1,
        "mode": "push",
        "maxHeight": 1000,
        "shadow": false,
        "toolTipBorderSize": 1,
        "toolTipTextShadowBlurRadius": 3,
        "toolTipTextShadowOpacity": 0,
        "toolTipPaddingTop": 4,
        "toolTipShadowColor": "#333333",
        "horizontalAlign": "center",
        "toolTipShadowHorizontalLength": 0,
        "rollOverIconURL": "skin/IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3_rollover.png",
        "toolTipFontFamily": "Arial",
        "paddingLeft": 0,
        "toolTipPaddingBottom": 4,
        "toolTipFontStyle": "normal",
        "toolTipFontSize": 12,
        "click": "this.setMediaBehaviour(this.playList_1BD5F1A8_5A41_5216_41C3_83DC2A98E30A, 0); this.MainViewerVideoPlayer.play()",
        "toolTip": "Department Head Video",
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontColor": "#606060",
        "toolTipPaddingLeft": 6,
        "cursor": "hand",
        "paddingTop": 0,
        "minWidth": 200,
        "width": "88%",
        "minHeight": 200,
        "verticalAlign": "middle",
        "borderSize": 0,
        "borderRadius": 0,
        "toolTipBorderColor": "#767676",
        "class": "IconButton",
        "toolTipBorderRadius": 3,
        "iconURL": "skin/IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.png",
        "toolTipFontWeight": "normal",
        "paddingRight": 0,
        "toolTipShadowVerticalLength": 0,
        "toolTipPaddingRight": 6,
        "height": "98%",
        "pressedIconURL": "skin/IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3_pressed.png",
        "paddingBottom": 0,
        "toolTipShadowSpread": 0,
        "toolTipShadowOpacity": 1,
        "transparencyActive": true,
        "toolTipTextShadowColor": "#000000"
       }
      ],
      "shadowOpacity": 0,
      "overflow": "visible",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "50%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "shadowColor": "#000000",
      "gap": 0,
      "shadowHorizontalLength": 3,
      "paddingRight": 0,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "shadow": false,
      "contentOpaque": true,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "toolTipShadowBlurRadius": 3,
        "backgroundOpacity": 0,
        "id": "IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8",
        "maxWidth": 70,
        "toolTipOpacity": 1,
        "mode": "push",
        "maxHeight": 100,
        "shadow": false,
        "toolTipBorderSize": 1,
        "toolTipTextShadowBlurRadius": 3,
        "toolTipTextShadowOpacity": 0,
        "toolTipPaddingTop": 4,
        "toolTipShadowColor": "#333333",
        "horizontalAlign": "center",
        "toolTipShadowHorizontalLength": 0,
        "toolTipFontFamily": "Arial",
        "paddingLeft": 0,
        "toolTipPaddingBottom": 4,
        "toolTipFontStyle": "normal",
        "toolTipFontSize": 12,
        "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13, 'showEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, 0, this.effect_6CABAB38_5657_6914_4191_06C77603C80F, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_6CABAB38_5657_6914_4191_06C77603C80F, 'hideEffect', false)",
        "toolTip": "Show labs list",
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontColor": "#606060",
        "toolTipPaddingLeft": 6,
        "cursor": "hand",
        "paddingTop": 0,
        "minWidth": 50,
        "width": "80%",
        "minHeight": 50,
        "verticalAlign": "middle",
        "borderSize": 0,
        "borderRadius": 0,
        "toolTipBorderColor": "#767676",
        "class": "IconButton",
        "toolTipBorderRadius": 3,
        "iconURL": "skin/IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.png",
        "toolTipFontWeight": "normal",
        "paddingRight": 0,
        "toolTipShadowVerticalLength": 0,
        "toolTipPaddingRight": 6,
        "height": "100%",
        "transparencyActive": true,
        "paddingBottom": 0,
        "toolTipShadowSpread": 0,
        "toolTipShadowOpacity": 1,
        "toolTipTextShadowColor": "#000000"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 0,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_6E17E57D_4213_6060_41A1_9148D02E3604",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "horizontal",
      "shadow": false,
      "contentOpaque": true,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "toolTipShadowBlurRadius": 3,
        "backgroundOpacity": 0,
        "id": "IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356",
        "maxWidth": 70,
        "toolTipOpacity": 1,
        "mode": "toggle",
        "maxHeight": 100,
        "shadow": false,
        "toolTipBorderSize": 1,
        "toolTipTextShadowBlurRadius": 3,
        "toolTipTextShadowOpacity": 0,
        "toolTipPaddingTop": 4,
        "toolTipShadowColor": "#333333",
        "horizontalAlign": "center",
        "toolTipShadowHorizontalLength": 0,
        "toolTipFontFamily": "Arial",
        "paddingLeft": 0,
        "toolTipPaddingBottom": 4,
        "toolTipFontStyle": "normal",
        "toolTipFontSize": 12,
        "toolTip": "Mute",
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontColor": "#606060",
        "toolTipPaddingLeft": 6,
        "cursor": "hand",
        "paddingTop": 0,
        "minWidth": 50,
        "width": "80%",
        "minHeight": 50,
        "verticalAlign": "middle",
        "borderSize": 0,
        "borderRadius": 0,
        "toolTipBorderColor": "#767676",
        "class": "IconButton",
        "toolTipBorderRadius": 3,
        "iconURL": "skin/IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356.png",
        "toolTipFontWeight": "normal",
        "paddingRight": 0,
        "toolTipShadowVerticalLength": 0,
        "toolTipPaddingRight": 6,
        "height": "100%",
        "pressedIconURL": "skin/IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356_pressed.png",
        "paddingBottom": 0,
        "toolTipShadowSpread": 0,
        "toolTipShadowOpacity": 1,
        "transparencyActive": true,
        "toolTipTextShadowColor": "#000000"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 0,
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "paddingTop": 2,
    "minWidth": 1,
    "width": "44.684%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "21.299%",
    "borderRadius": 0,
    "paddingRight": 5,
    "gap": 5,
    "paddingBottom": 2,
    "right": "5%"
   },
   {
    "backgroundOpacity": 0,
    "id": "Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5",
    "scrollBarMargin": 2,
    "maxWidth": 500,
    "scrollBarVisible": "rollOver",
    "maxHeight": 180,
    "scrollBarWidth": 10,
    "shadow": false,
    "layout": "absolute",
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundOpacity": 0,
      "bottom": "0%",
      "id": "Image_7615E83C_29EC_D15C_41B6_53D6B9448359",
      "maxWidth": 700,
      "maxHeight": 600,
      "shadow": false,
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 50,
      "minHeight": 30,
      "verticalAlign": "middle",
      "borderSize": 0,
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_7615E83C_29EC_D15C_41B6_53D6B9448359.jpg",
      "paddingBottom": 0,
      "left": "0%",
      "right": "0%",
      "top": "0%"
     },
     {
      "backgroundOpacity": 0,
      "bottom": "0%",
      "id": "Image_4A371192_29EB_D325_41B4_06FF095FB8E1",
      "maxWidth": 700,
      "maxHeight": 600,
      "shadow": false,
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 50,
      "minHeight": 30,
      "verticalAlign": "middle",
      "borderSize": 0,
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_4A371192_29EB_D325_41B4_06FF095FB8E1.jpg",
      "paddingBottom": 0,
      "left": "0%",
      "right": "0%",
      "top": "0%"
     },
     {
      "backgroundOpacity": 0,
      "bottom": "0%",
      "id": "Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235",
      "maxWidth": 1705,
      "maxHeight": 600,
      "shadow": false,
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.jpg",
      "paddingBottom": 0,
      "left": "0%",
      "right": "0%",
      "top": "0%"
     },
     {
      "backgroundOpacity": 0,
      "bottom": "0%",
      "id": "Image_74AA3858_29EC_5124_41B6_A1E86580D355",
      "maxWidth": 1705,
      "maxHeight": 600,
      "shadow": false,
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_74AA3858_29EC_5124_41B6_A1E86580D355.jpg",
      "paddingBottom": 0,
      "left": "0%",
      "right": "0%",
      "top": "0%"
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 0,
    "paddingBottom": 0,
    "right": "1%",
    "top": "1%"
   }
  ],
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "paddingTop": 0,
  "minWidth": 500,
  "width": "82.948%",
  "minHeight": 500,
  "verticalAlign": "middle",
  "borderSize": 0,
  "scrollBarOpacity": 0,
  "height": "99.918%",
  "borderRadius": 0,
  "paddingRight": 0,
  "gap": 10,
  "paddingBottom": 0,
  "right": "0%"
 },
 {
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "bottom": "3%",
  "id": "Container_77D4607B_4271_6060_41A3_CF43634A36B0",
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "layout": "horizontal",
  "shadow": false,
  "contentOpaque": false,
  "visible": false,
  "horizontalAlign": "center",
  "class": "Container",
  "paddingLeft": 0,
  "children": [
   {
    "toolTipShadowBlurRadius": 3,
    "backgroundOpacity": 0,
    "id": "Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE",
    "maxWidth": 850,
    "toolTipOpacity": 1,
    "maxHeight": 850,
    "shadow": false,
    "toolTipBorderSize": 1,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipTextShadowOpacity": 0,
    "toolTipPaddingTop": 4,
    "toolTipShadowColor": "#333333",
    "horizontalAlign": "center",
    "toolTipShadowHorizontalLength": 0,
    "toolTipFontFamily": "Arial",
    "paddingLeft": 0,
    "toolTipPaddingBottom": 4,
    "toolTipFontStyle": "normal",
    "toolTipFontSize": 12,
    "click": "this.mainPlayList.set('selectedIndex', 0)",
    "toolTip": "Home",
    "toolTipBackgroundColor": "#FFFFFF",
    "toolTipFontColor": "#606060",
    "toolTipPaddingLeft": 6,
    "class": "Image",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "63.469%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "borderRadius": 0,
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 6,
    "toolTipBorderRadius": 3,
    "height": "83%",
    "toolTipFontWeight": "normal",
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.png",
    "toolTipShadowVerticalLength": 0,
    "paddingBottom": 0,
    "toolTipShadowSpread": 0,
    "toolTipShadowOpacity": 1,
    "toolTipTextShadowColor": "#000000"
   }
  ],
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "paddingTop": 0,
  "minWidth": 1,
  "width": "11.834%",
  "minHeight": 1,
  "verticalAlign": "middle",
  "borderSize": 0,
  "scrollBarOpacity": 0.5,
  "height": "16.434%",
  "borderRadius": 0,
  "paddingRight": 0,
  "gap": 10,
  "paddingBottom": 0,
  "left": "3%"
 },
 {
  "backgroundOpacity": 0.55,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "backgroundColor": [
   "#000000"
  ],
  "shadow": false,
  "visible": false,
  "class": "UIComponent",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "paddingTop": 0,
  "minWidth": 0,
  "minHeight": 0,
  "borderSize": 0,
  "backgroundColorRatios": [
   0
  ],
  "borderRadius": 0,
  "paddingRight": 0,
  "paddingBottom": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "left": 0,
  "right": 0,
  "top": 0
 },
 {
  "backgroundOpacity": 1,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundColor": [],
  "shadow": false,
  "visible": false,
  "class": "ZoomImage",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "paddingTop": 0,
  "minWidth": 0,
  "minHeight": 0,
  "borderSize": 0,
  "backgroundColorRatios": [],
  "borderRadius": 0,
  "paddingRight": 0,
  "scaleMode": "custom",
  "paddingBottom": 0,
  "left": 0,
  "right": 0,
  "top": 0
 },
 {
  "backgroundOpacity": 0.3,
  "shadowBlurRadius": 6,
  "id": "closeButtonPopupPanorama",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconColor": "#000000",
  "textDecoration": "none",
  "mode": "push",
  "layout": "horizontal",
  "shadow": false,
  "iconHeight": 20,
  "visible": false,
  "fontFamily": "Arial",
  "horizontalAlign": "center",
  "iconBeforeLabel": true,
  "class": "CloseButton",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 5,
  "shadowSpread": 1,
  "fontColor": "#FFFFFF",
  "fontWeight": "normal",
  "iconLineWidth": 5,
  "cursor": "hand",
  "paddingTop": 5,
  "minWidth": 0,
  "borderColor": "#000000",
  "minHeight": 0,
  "verticalAlign": "middle",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingRight": 5,
  "pressedIconColor": "#888888",
  "rollOverIconColor": "#666666",
  "gap": 5,
  "shadowColor": "#000000",
  "paddingBottom": 5,
  "fontSize": 12,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "right": 10,
  "iconWidth": 20,
  "label": "",
  "top": 10
 }
], 
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "scripts": {
  "getKey": function(key){  return window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "existsKey": function(key){  return key in window; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; }
 },
 "shadow": false,
 "contentOpaque": false,
 "buttonToggleMute": "this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "class": "Player",
 "paddingTop": 0,
 "minWidth": 20,
 "width": "100%",
 "minHeight": 20,
 "verticalAlign": "top",
 "borderSize": 0,
 "height": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "vrPolyfillScale": 0.5,
 "gap": 10,
 "start": "this.playAudioList([this.audio_3DA9E88E_2B19_A500_41C0_6174A05A143F]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": false
})