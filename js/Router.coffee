window.Router =
  route: (hash) ->
    hash = "#welcome" if hash is "" or !hash?
    switch hash.split("/")[0]
      when ""
        window.location.href += hash
        window.location.reload()
      when "#welcome"
        $("#view-main").load "welcome.html"
      when "#upload"
        $("#view-main").load "uploading.html"
      when "#timetable"
        $("#view-main").load "timetable.html"
      when "#step2"
        $("#view-main").load "step2.html"
    window.location.hash = hash
  routeTimetable: ->
    hash = window.location.hash.split("/")
    if hash[0] is "#timetable" and hash[1]?
      currentUser = hash[1]