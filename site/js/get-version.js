function GetLatestReleaseInfo() {
  $.getJSON("https://api.github.com/repos/niess/turtle/releases/latest").done(function(release) {
    $(".download-url").attr("href", release.tarball_url);
    $(".release-tag").text(release.tag_name);
    $(".release-tag").fadeIn("slow");
  });
}

GetLatestReleaseInfo();
