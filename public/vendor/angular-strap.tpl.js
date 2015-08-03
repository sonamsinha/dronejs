


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>angular-strap/angular-strap.tpl.js at master · mgcrea/angular-strap · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="mgcrea/angular-strap" name="twitter:title" /><meta content="angular-strap - AngularJS 1.2+ native directives for Bootstrap 3." name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/108273?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/108273?v=3&amp;s=400" property="og:image" /><meta content="mgcrea/angular-strap" property="og:title" /><meta content="https://github.com/mgcrea/angular-strap" property="og:url" /><meta content="angular-strap - AngularJS 1.2+ native directives for Bootstrap 3." property="og:description" />
      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="0CEF0D8E:2027:1207531B:54E691FB" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="NGgS4aXa1y/0AJgq84qXDaW4OuV8WgfvZuL1o7TrCt1ok2g7JJngUGEHxLjObru4hbwW2SkqagQC4K6OD9ZHNA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-5babf25e3161fe5231c33e09fef433d57ceb643fe0850efd515f6139e9a2419b.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-a34ea5f36919335b720f812ba66ac87065665d8d6d759d6f237e7129ba34edb6.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="c37e13d674ae404af2a6b94216ec321a">

      
  <meta name="description" content="angular-strap - AngularJS 1.2+ native directives for Bootstrap 3.">
  <meta name="go-import" content="github.com/mgcrea/angular-strap git https://github.com/mgcrea/angular-strap.git">

  <meta content="108273" name="octolytics-dimension-user_id" /><meta content="mgcrea" name="octolytics-dimension-user_login" /><meta content="5718947" name="octolytics-dimension-repository_id" /><meta content="mgcrea/angular-strap" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5718947" name="octolytics-dimension-repository_network_root_id" /><meta content="mgcrea/angular-strap" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mgcrea/angular-strap/commits/master.atom" rel="alternate" title="Recent Commits to angular-strap:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="button primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="button" href="/login?return_to=%2Fmgcrea%2Fangular-strap%2Fblob%2Fmaster%2Fdist%2Fangular-strap.tpl.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/mgcrea/angular-strap/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/mgcrea/angular-strap/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fmgcrea%2Fangular-strap"
    class="minibutton with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/mgcrea/angular-strap/watchers">
    239
  </a>


  </li>

  <li>
      <a href="/login?return_to=%2Fmgcrea%2Fangular-strap"
    class="minibutton with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/mgcrea/angular-strap/stargazers">
      4,846
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fmgcrea%2Fangular-strap"
        class="minibutton with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/mgcrea/angular-strap/network" class="social-count">
        1,076
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/mgcrea" class="url fn" itemprop="url" rel="author"><span itemprop="title">mgcrea</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/mgcrea/angular-strap" class="js-current-repository" data-pjax="#js-repo-pjax-container">angular-strap</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/mgcrea/angular-strap/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/mgcrea/angular-strap" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /mgcrea/angular-strap">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/mgcrea/angular-strap/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /mgcrea/angular-strap/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/mgcrea/angular-strap/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /mgcrea/angular-strap/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/mgcrea/angular-strap/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /mgcrea/angular-strap/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/mgcrea/angular-strap/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /mgcrea/angular-strap/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/mgcrea/angular-strap/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /mgcrea/angular-strap/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/mgcrea/angular-strap.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/mgcrea/angular-strap" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a> or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/mgcrea/angular-strap" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save mgcrea/angular-strap to your computer and use it in GitHub Desktop." aria-label="Save mgcrea/angular-strap to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/mgcrea/angular-strap/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of mgcrea/angular-strap as a zip file"
                   title="Download the contents of mgcrea/angular-strap as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/mgcrea/angular-strap/blob/eb0635e8723922c4b7dad872cce8e15566c6b47d/dist/angular-strap.tpl.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:88a2986bbe46a24ef691ae08a1702eac -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mgcrea/angular-strap/blob/gh-pages/dist/angular-strap.tpl.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mgcrea/angular-strap/blob/legacy/dist/angular-strap.tpl.js"
               data-name="legacy"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="legacy">
                legacy
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/mgcrea/angular-strap/blob/master/dist/angular-strap.tpl.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.2.0/dist/angular-strap.tpl.js"
                 data-name="v2.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.2.0">v2.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.1.6/dist/angular-strap.tpl.js"
                 data-name="v2.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.6">v2.1.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.1.5/dist/angular-strap.tpl.js"
                 data-name="v2.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.5">v2.1.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.1.4/dist/angular-strap.tpl.js"
                 data-name="v2.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.4">v2.1.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.1.3/dist/angular-strap.tpl.js"
                 data-name="v2.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.3">v2.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.1.2/dist/angular-strap.tpl.js"
                 data-name="v2.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.2">v2.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.1.1/dist/angular-strap.tpl.js"
                 data-name="v2.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.1">v2.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.1.0/dist/angular-strap.tpl.js"
                 data-name="v2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.0">v2.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.5/dist/angular-strap.tpl.js"
                 data-name="v2.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.5">v2.0.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.4/dist/angular-strap.tpl.js"
                 data-name="v2.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.4">v2.0.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.3/dist/angular-strap.tpl.js"
                 data-name="v2.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.3">v2.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.2/dist/angular-strap.tpl.js"
                 data-name="v2.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.2">v2.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.1/dist/angular-strap.tpl.js"
                 data-name="v2.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.1">v2.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-rc.4/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-rc.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.0-rc.4">v2.0.0-rc.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-rc.3/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-rc.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.0-rc.3">v2.0.0-rc.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-rc.2/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.0-rc.2">v2.0.0-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-rc.1/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.0-rc.1">v2.0.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-beta.4/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-beta.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.0-beta.4">v2.0.0-beta.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-beta.3/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-beta.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.0-beta.3">v2.0.0-beta.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-beta.2/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-beta.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.0-beta.2">v2.0.0-beta.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0-beta.1/dist/angular-strap.tpl.js"
                 data-name="v2.0.0-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.0-beta.1">v2.0.0-beta.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v2.0.0/dist/angular-strap.tpl.js"
                 data-name="v2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.0">v2.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.8/dist/angular-strap.tpl.js"
                 data-name="v0.7.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.7.8">v0.7.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.7/dist/angular-strap.tpl.js"
                 data-name="v0.7.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.7.7">v0.7.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.6/dist/angular-strap.tpl.js"
                 data-name="v0.7.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.7.6">v0.7.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.5/dist/angular-strap.tpl.js"
                 data-name="v0.7.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.7.5">v0.7.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.4/dist/angular-strap.tpl.js"
                 data-name="v0.7.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.7.4">v0.7.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.3/dist/angular-strap.tpl.js"
                 data-name="v0.7.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.7.3">v0.7.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.2/dist/angular-strap.tpl.js"
                 data-name="v0.7.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.7.2">v0.7.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.1/dist/angular-strap.tpl.js"
                 data-name="v0.7.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.7.1">v0.7.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.7.0/dist/angular-strap.tpl.js"
                 data-name="v0.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.7.0">v0.7.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.6.6/dist/angular-strap.tpl.js"
                 data-name="v0.6.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.6.6">v0.6.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.6.5/dist/angular-strap.tpl.js"
                 data-name="v0.6.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.6.5">v0.6.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.6.4/dist/angular-strap.tpl.js"
                 data-name="v0.6.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.6.4">v0.6.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.6.3/dist/angular-strap.tpl.js"
                 data-name="v0.6.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.6.3">v0.6.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.6.2/dist/angular-strap.tpl.js"
                 data-name="v0.6.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.6.2">v0.6.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.6.1/dist/angular-strap.tpl.js"
                 data-name="v0.6.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.6.1">v0.6.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.6.0/dist/angular-strap.tpl.js"
                 data-name="v0.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.6.0">v0.6.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.5.10/dist/angular-strap.tpl.js"
                 data-name="v0.5.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.5.10">v0.5.10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.5.9/dist/angular-strap.tpl.js"
                 data-name="v0.5.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.5.9">v0.5.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.5.8/dist/angular-strap.tpl.js"
                 data-name="v0.5.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.5.8">v0.5.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.5.7/dist/angular-strap.tpl.js"
                 data-name="v0.5.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.5.7">v0.5.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mgcrea/angular-strap/tree/v0.5.6/dist/angular-strap.tpl.js"
                 data-name="v0.5.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.5.6">v0.5.6</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="button-group right">
    <a href="/mgcrea/angular-strap/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mgcrea/angular-strap" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">angular-strap</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mgcrea/angular-strap/tree/master/dist" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator">/</span><strong class="final-path">angular-strap.tpl.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Olivier Louvignes" class="avatar" data-user="108273" height="24" src="https://avatars0.githubusercontent.com/u/108273?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/mgcrea" rel="author">mgcrea</a></span>
        <time datetime="2015-01-11T19:47:22Z" is="relative-time">Jan 11, 2015</time>
        <div class="commit-title">
            <a href="/mgcrea/angular-strap/commit/12e1ef6d3f6e186af2d2aa2c5d978e37bc0c18f2" class="message" data-pjax="true" title="chore(release): cut the v2.1.6 release">chore(release): cut the v2.1.6 release</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Olivier Louvignes" data-user="108273" height="24" src="https://avatars0.githubusercontent.com/u/108273?v=3&amp;s=48" width="24" />
            <a href="/mgcrea">mgcrea</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-info">
        90 lines (54 sloc)
        <span class="file-info-divider"></span>
      8.781 kb
    </div>
    <div class="file-actions">
      <div class="button-group">
        <a href="/mgcrea/angular-strap/raw/master/dist/angular-strap.tpl.js" class="minibutton " id="raw-url">Raw</a>
          <a href="/mgcrea/angular-strap/blame/master/dist/angular-strap.tpl.js" class="minibutton js-update-url-with-hash">Blame</a>
        <a href="/mgcrea/angular-strap/commits/master/dist/angular-strap.tpl.js" class="minibutton " rel="nofollow">History</a>
      </div><!-- /.button-group -->

        <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
           href="http://mac.github.com"
           data-url="github-mac://openRepo/https://github.com/mgcrea/angular-strap?branch=master&amp;filepath=dist%2Fangular-strap.tpl.js"
           aria-label="Open this file in GitHub for Mac"
           data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
            <span class="octicon octicon-device-desktop"></span>
        </a>

          <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

        <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
           aria-label="You must be signed in to make or propose changes">
        <span class="octicon octicon-trashcan"></span>
      </a>
    </div><!-- /.actions -->
  </div>
  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c"> * angular-strap</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"> * @version v2.1.6 - 2015-01-11</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c"> * @link http://mgcrea.github.io/angular-strap</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c"> * @author Olivier Louvignes (olivier@mg-crea.com)</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c"> * @license MIT License, http://www.opensource.org/licenses/MIT</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">(<span class="pl-st">function</span>(<span class="pl-vpf">window</span>, <span class="pl-vpf">document</span>, <span class="pl-vpf">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-s1"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line"><span class="pl-c">// Source: alert.tpl.js</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">angular.module(<span class="pl-s1"><span class="pl-pds">&#39;</span>mgcrea.ngStrap.alert<span class="pl-pds">&#39;</span></span>).run([<span class="pl-s1"><span class="pl-pds">&#39;</span>$templateCache<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">$templateCache</span>) {</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">  $templateCache.put(<span class="pl-s1"><span class="pl-pds">&#39;</span>alert/alert.tpl.html<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;alert&quot; ng-class=&quot;[type ? <span class="pl-cce">\&#39;</span>alert-<span class="pl-cce">\&#39;</span> + type : null]&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;close&quot; ng-if=&quot;dismissable&quot; ng-click=&quot;$hide()&quot;&gt;&amp;times;&lt;/button&gt; &lt;strong ng-bind=&quot;title&quot;&gt;&lt;/strong&gt;&amp;nbsp;&lt;span ng-bind-html=&quot;content&quot;&gt;&lt;/span&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line"><span class="pl-c">// Source: aside.tpl.js</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">angular.module(<span class="pl-s1"><span class="pl-pds">&#39;</span>mgcrea.ngStrap.aside<span class="pl-pds">&#39;</span></span>).run([<span class="pl-s1"><span class="pl-pds">&#39;</span>$templateCache<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">$templateCache</span>) {</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">  $templateCache.put(<span class="pl-s1"><span class="pl-pds">&#39;</span>aside/aside.tpl.html<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;aside&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot;&gt;&lt;div class=&quot;aside-dialog&quot;&gt;&lt;div class=&quot;aside-content&quot;&gt;&lt;div class=&quot;aside-header&quot; ng-show=&quot;title&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;close&quot; ng-click=&quot;$hide()&quot;&gt;&amp;times;&lt;/button&gt;&lt;h4 class=&quot;aside-title&quot; ng-bind=&quot;title&quot;&gt;&lt;/h4&gt;&lt;/div&gt;&lt;div class=&quot;aside-body&quot; ng-bind=&quot;content&quot;&gt;&lt;/div&gt;&lt;div class=&quot;aside-footer&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; ng-click=&quot;$hide()&quot;&gt;Close&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line"><span class="pl-c">// Source: datepicker.tpl.js</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">angular.module(<span class="pl-s1"><span class="pl-pds">&#39;</span>mgcrea.ngStrap.datepicker<span class="pl-pds">&#39;</span></span>).run([<span class="pl-s1"><span class="pl-pds">&#39;</span>$templateCache<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">$templateCache</span>) {</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">  $templateCache.put(&#39;datepicker/datepicker.tpl.html&#39;, &#39;&lt;div class=&quot;dropdown-menu datepicker&quot; ng-class=&quot;\&#39;datepicker-mode-\&#39; + $mode&quot; style=&quot;max-width: 320px&quot;&gt;&lt;table style=&quot;table-layout: fixed; height: 100%; width: 100%&quot;&gt;&lt;thead&gt;&lt;tr class=&quot;text-center&quot;&gt;&lt;th&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default pull-left&quot; ng-click=&quot;$selectPane(-1)&quot;&gt;&lt;i class=&quot;{{$iconLeft}}&quot;&gt;&lt;/i&gt;&lt;/button&gt;&lt;/th&gt;&lt;th colspan=&quot;{{ rows[0].length - 2 }}&quot;&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default btn-block text-strong&quot; ng-click=&quot;$toggleMode()&quot;&gt;&lt;strong style=&quot;text-transform: capitalize&quot; ng-bind=&quot;title&quot;&gt;&lt;/strong&gt;&lt;/button&gt;&lt;/th&gt;&lt;th&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default pull-right&quot; ng-click=&quot;$selectPane(+1)&quot;&gt;&lt;i class=&quot;{{$iconRight}}&quot;&gt;&lt;/i&gt;&lt;/button&gt;&lt;/th&gt;&lt;/tr&gt;&lt;tr ng-show=&quot;showLabels&quot; ng-bind-html=&quot;labels&quot;&gt;&lt;/tr&gt;&lt;/thead&gt;&lt;tbody&gt;&lt;tr ng-repeat=&quot;(i, row) in rows&quot; height=&quot;{{ 100 / rows.length }}%&quot;&gt;&lt;td class=&quot;text-center&quot; ng-repeat=&quot;(j, el) in row&quot;&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default&quot; style=&quot;width: 100%&quot; ng-class=&quot;{\&#39;btn-primary\&#39;: el.selected, \&#39;btn-info btn-today\&#39;: el.isToday &amp;&amp; !el.selected}&quot; ng-click=&quot;$select(el.date)&quot; ng-disabled=&quot;el.disabled&quot;&gt;&lt;span ng-class=&quot;{\&#39;text-muted\&#39;: el.muted}&quot; ng-bind=&quot;el.label&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/div&gt;&#39;);</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line"><span class="pl-c">// Source: dropdown.tpl.js</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">angular.module(<span class="pl-s1"><span class="pl-pds">&#39;</span>mgcrea.ngStrap.dropdown<span class="pl-pds">&#39;</span></span>).run([<span class="pl-s1"><span class="pl-pds">&#39;</span>$templateCache<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">$templateCache</span>) {</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">  $templateCache.put(<span class="pl-s1"><span class="pl-pds">&#39;</span>dropdown/dropdown.tpl.html<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;ul tabindex=&quot;-1&quot; class=&quot;dropdown-menu&quot; role=&quot;menu&quot;&gt;&lt;li role=&quot;presentation&quot; ng-class=&quot;{divider: item.divider}&quot; ng-repeat=&quot;item in content&quot;&gt;&lt;a role=&quot;menuitem&quot; tabindex=&quot;-1&quot; ng-href=&quot;{{item.href}}&quot; ng-if=&quot;!item.divider &amp;&amp; item.href&quot; target=&quot;{{item.target || <span class="pl-cce">\&#39;\&#39;</span>}}&quot; ng-bind=&quot;item.text&quot;&gt;&lt;/a&gt; &lt;a role=&quot;menuitem&quot; tabindex=&quot;-1&quot; href=&quot;javascript:void(0)&quot; ng-if=&quot;!item.divider &amp;&amp; item.click&quot; ng-click=&quot;$eval(item.click);$hide()&quot; ng-bind=&quot;item.text&quot;&gt;&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line"><span class="pl-c">// Source: modal.tpl.js</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">angular.module(<span class="pl-s1"><span class="pl-pds">&#39;</span>mgcrea.ngStrap.modal<span class="pl-pds">&#39;</span></span>).run([<span class="pl-s1"><span class="pl-pds">&#39;</span>$templateCache<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">$templateCache</span>) {</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">  $templateCache.put(<span class="pl-s1"><span class="pl-pds">&#39;</span>modal/modal.tpl.html<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;modal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot;&gt;&lt;div class=&quot;modal-dialog&quot;&gt;&lt;div class=&quot;modal-content&quot;&gt;&lt;div class=&quot;modal-header&quot; ng-show=&quot;title&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;close&quot; ng-click=&quot;$hide()&quot;&gt;&amp;times;&lt;/button&gt;&lt;h4 class=&quot;modal-title&quot; ng-bind=&quot;title&quot;&gt;&lt;/h4&gt;&lt;/div&gt;&lt;div class=&quot;modal-body&quot; ng-bind=&quot;content&quot;&gt;&lt;/div&gt;&lt;div class=&quot;modal-footer&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; ng-click=&quot;$hide()&quot;&gt;Close&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line"><span class="pl-c">// Source: popover.tpl.js</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">angular.module(<span class="pl-s1"><span class="pl-pds">&#39;</span>mgcrea.ngStrap.popover<span class="pl-pds">&#39;</span></span>).run([<span class="pl-s1"><span class="pl-pds">&#39;</span>$templateCache<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">$templateCache</span>) {</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">  $templateCache.put(<span class="pl-s1"><span class="pl-pds">&#39;</span>popover/popover.tpl.html<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;popover&quot;&gt;&lt;div class=&quot;arrow&quot;&gt;&lt;/div&gt;&lt;h3 class=&quot;popover-title&quot; ng-bind=&quot;title&quot; ng-show=&quot;title&quot;&gt;&lt;/h3&gt;&lt;div class=&quot;popover-content&quot; ng-bind=&quot;content&quot;&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line"><span class="pl-c">// Source: select.tpl.js</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">angular.module(<span class="pl-s1"><span class="pl-pds">&#39;</span>mgcrea.ngStrap.select<span class="pl-pds">&#39;</span></span>).run([<span class="pl-s1"><span class="pl-pds">&#39;</span>$templateCache<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">$templateCache</span>) {</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">  $templateCache.put(<span class="pl-s1"><span class="pl-pds">&#39;</span>select/select.tpl.html<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;ul tabindex=&quot;-1&quot; class=&quot;select dropdown-menu&quot; ng-show=&quot;$isVisible()&quot; role=&quot;select&quot;&gt;&lt;li ng-if=&quot;$showAllNoneButtons&quot;&gt;&lt;div class=&quot;btn-group&quot; style=&quot;margin-bottom: 5px; margin-left: 5px&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;btn btn-default btn-xs&quot; ng-click=&quot;$selectAll()&quot;&gt;{{$allText}}&lt;/button&gt; &lt;button type=&quot;button&quot; class=&quot;btn btn-default btn-xs&quot; ng-click=&quot;$selectNone()&quot;&gt;{{$noneText}}&lt;/button&gt;&lt;/div&gt;&lt;/li&gt;&lt;li role=&quot;presentation&quot; ng-repeat=&quot;match in $matches&quot; ng-class=&quot;{active: $isActive($index)}&quot;&gt;&lt;a style=&quot;cursor: default&quot; role=&quot;menuitem&quot; tabindex=&quot;-1&quot; ng-click=&quot;$select($index, $event)&quot;&gt;&lt;i class=&quot;{{$iconCheckmark}} pull-right&quot; ng-if=&quot;$isMultiple &amp;&amp; $isActive($index)&quot;&gt;&lt;/i&gt; &lt;span ng-bind=&quot;match.label&quot;&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line"><span class="pl-c">// Source: tab.tpl.js</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">angular.module(<span class="pl-s1"><span class="pl-pds">&#39;</span>mgcrea.ngStrap.tab<span class="pl-pds">&#39;</span></span>).run([<span class="pl-s1"><span class="pl-pds">&#39;</span>$templateCache<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">$templateCache</span>) {</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">  $templateCache.put(<span class="pl-s1"><span class="pl-pds">&#39;</span>tab/tab.tpl.html<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;ul class=&quot;nav&quot; ng-class=&quot;$navClass&quot; role=&quot;tablist&quot;&gt;&lt;li ng-repeat=&quot;$pane in $panes track by $index&quot; ng-class=&quot;$index == $panes.$active ? $activeClass : <span class="pl-cce">\&#39;\&#39;</span>&quot;&gt;&lt;a role=&quot;tab&quot; data-toggle=&quot;tab&quot; ng-click=&quot;$setActive($index)&quot; data-index=&quot;{{ $index }}&quot; ng-bind-html=&quot;$pane.title&quot;&gt;&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;&lt;div ng-transclude class=&quot;tab-content&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line"><span class="pl-c">// Source: timepicker.tpl.js</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">angular.module(<span class="pl-s1"><span class="pl-pds">&#39;</span>mgcrea.ngStrap.timepicker<span class="pl-pds">&#39;</span></span>).run([<span class="pl-s1"><span class="pl-pds">&#39;</span>$templateCache<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">$templateCache</span>) {</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">  $templateCache.put(&#39;timepicker/timepicker.tpl.html&#39;, &#39;&lt;div class=&quot;dropdown-menu timepicker&quot; style=&quot;min-width: 0px;width: auto&quot;&gt;&lt;table height=&quot;100%&quot;&gt;&lt;thead&gt;&lt;tr class=&quot;text-center&quot;&gt;&lt;th&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default pull-left&quot; ng-click=&quot;$arrowAction(-1, 0)&quot;&gt;&lt;i class=&quot;{{ $iconUp }}&quot;&gt;&lt;/i&gt;&lt;/button&gt;&lt;/th&gt;&lt;th&gt;&amp;nbsp;&lt;/th&gt;&lt;th&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default pull-left&quot; ng-click=&quot;$arrowAction(-1, 1)&quot;&gt;&lt;i class=&quot;{{ $iconUp }}&quot;&gt;&lt;/i&gt;&lt;/button&gt;&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;&lt;tbody&gt;&lt;tr ng-repeat=&quot;(i, row) in rows&quot;&gt;&lt;td class=&quot;text-center&quot;&gt;&lt;button tabindex=&quot;-1&quot; style=&quot;width: 100%&quot; type=&quot;button&quot; class=&quot;btn btn-default&quot; ng-class=&quot;{\&#39;btn-primary\&#39;: row[0].selected}&quot; ng-click=&quot;$select(row[0].date, 0)&quot; ng-disabled=&quot;row[0].disabled&quot;&gt;&lt;span ng-class=&quot;{\&#39;text-muted\&#39;: row[0].muted}&quot; ng-bind=&quot;row[0].label&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/td&gt;&lt;td&gt;&lt;span ng-bind=&quot;i == midIndex ? timeSeparator : \&#39; \&#39;&quot;&gt;&lt;/span&gt;&lt;/td&gt;&lt;td class=&quot;text-center&quot;&gt;&lt;button tabindex=&quot;-1&quot; ng-if=&quot;row[1].date&quot; style=&quot;width: 100%&quot; type=&quot;button&quot; class=&quot;btn btn-default&quot; ng-class=&quot;{\&#39;btn-primary\&#39;: row[1].selected}&quot; ng-click=&quot;$select(row[1].date, 1)&quot; ng-disabled=&quot;row[1].disabled&quot;&gt;&lt;span ng-class=&quot;{\&#39;text-muted\&#39;: row[1].muted}&quot; ng-bind=&quot;row[1].label&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/td&gt;&lt;td ng-if=&quot;showAM&quot;&gt;&amp;nbsp;&lt;/td&gt;&lt;td ng-if=&quot;showAM&quot;&gt;&lt;button tabindex=&quot;-1&quot; ng-show=&quot;i == midIndex - !isAM * 1&quot; style=&quot;width: 100%&quot; type=&quot;button&quot; ng-class=&quot;{\&#39;btn-primary\&#39;: !!isAM}&quot; class=&quot;btn btn-default&quot; ng-click=&quot;$switchMeridian()&quot; ng-disabled=&quot;el.disabled&quot;&gt;AM&lt;/button&gt; &lt;button tabindex=&quot;-1&quot; ng-show=&quot;i == midIndex + 1 - !isAM * 1&quot; style=&quot;width: 100%&quot; type=&quot;button&quot; ng-class=&quot;{\&#39;btn-primary\&#39;: !isAM}&quot; class=&quot;btn btn-default&quot; ng-click=&quot;$switchMeridian()&quot; ng-disabled=&quot;el.disabled&quot;&gt;PM&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;tfoot&gt;&lt;tr class=&quot;text-center&quot;&gt;&lt;th&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default pull-left&quot; ng-click=&quot;$arrowAction(1, 0)&quot;&gt;&lt;i class=&quot;{{ $iconDown }}&quot;&gt;&lt;/i&gt;&lt;/button&gt;&lt;/th&gt;&lt;th&gt;&amp;nbsp;&lt;/th&gt;&lt;th&gt;&lt;button tabindex=&quot;-1&quot; type=&quot;button&quot; class=&quot;btn btn-default pull-left&quot; ng-click=&quot;$arrowAction(1, 1)&quot;&gt;&lt;i class=&quot;{{ $iconDown }}&quot;&gt;&lt;/i&gt;&lt;/button&gt;&lt;/th&gt;&lt;/tr&gt;&lt;/tfoot&gt;&lt;/table&gt;&lt;/div&gt;&#39;);</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line"><span class="pl-c">// Source: tooltip.tpl.js</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">angular.module(<span class="pl-s1"><span class="pl-pds">&#39;</span>mgcrea.ngStrap.tooltip<span class="pl-pds">&#39;</span></span>).run([<span class="pl-s1"><span class="pl-pds">&#39;</span>$templateCache<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">$templateCache</span>) {</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">  $templateCache.put(<span class="pl-s1"><span class="pl-pds">&#39;</span>tooltip/tooltip.tpl.html<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;div class=&quot;tooltip in&quot; ng-show=&quot;title&quot;&gt;&lt;div class=&quot;tooltip-arrow&quot;&gt;&lt;/div&gt;&lt;div class=&quot;tooltip-inner&quot; ng-bind=&quot;title&quot;&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line"><span class="pl-c">// Source: typeahead.tpl.js</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">angular.module(<span class="pl-s1"><span class="pl-pds">&#39;</span>mgcrea.ngStrap.typeahead<span class="pl-pds">&#39;</span></span>).run([<span class="pl-s1"><span class="pl-pds">&#39;</span>$templateCache<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">$templateCache</span>) {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">  $templateCache.put(<span class="pl-s1"><span class="pl-pds">&#39;</span>typeahead/typeahead.tpl.html<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;ul tabindex=&quot;-1&quot; class=&quot;typeahead dropdown-menu&quot; ng-show=&quot;$isVisible()&quot; role=&quot;select&quot;&gt;&lt;li role=&quot;presentation&quot; ng-repeat=&quot;match in $matches&quot; ng-class=&quot;{active: $index == $activeIndex}&quot;&gt;&lt;a role=&quot;menuitem&quot; tabindex=&quot;-1&quot; ng-click=&quot;$select($index, $event)&quot; ng-bind=&quot;match.label&quot;&gt;&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">}]);</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">})(<span class="pl-s3">window</span>, <span class="pl-s3">document</span>);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="http://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="http://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.04320s from github-fe143-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-9643b0378c6bcb216adcdaaaa703eed77aa239aaf1c2ae44cadb2fb5099ec172.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-9dec5965f0440c271e53f19297ddcf6a6e892652dcbd89ff67742db9834aeeb6.js"></script>
      
      

  </body>
</html>

