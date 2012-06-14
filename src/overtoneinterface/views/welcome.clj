(ns overtoneinterface.views.welcome
  (:require [overtoneinterface.views.common :as common]
            [overtoneinterface.models.dubstep :as dubstep])
  (:use [noir.core :only [defpage]]
        [overtone.live]
        [noir.fetch.remotes :only [defremote]]
        [hiccup.core :only [html]]))

(defpage "/" []
  (common/layout
   [:div#controls]
   [:div#wobble]
   [:div#notes]
   [:div#piano]))

(defremote start-dub []
  (dubstep/start-dub))

(defremote stop-dub []
  (dubstep/stop-dub))

(defremote dub-note [n]
  (dubstep/alter-dub :note n))

(defremote dub-wobble [n]
    (dubstep/alter-dub :wobble-factor n))
