// Generated by CoffeeScript 1.8.0
(function() {
    var GeneralApp;

    GeneralApp = {
        ajax: {
            method: {
                GET: 'get',
                POST: 'post'
            },
            fail: function(xhr) {
                if (xhr.status === 401) {

                } else {
                    alert('ERROR: ' + xhr.responseText);
                }
            },
            "do": function(url, data, method, success, fail, complete) {
                var self;
                if (method == null) {
                    method = 'post';
                }
                self = GeneralApp;
                return $.ajax({
                    type: method,
                    url: url,
                    data: data,
                    success: function(data, status, xhr) {
                        var html, type;
                        type = xhr.getResponseHeader("content-type");
                        html = false;
                        if (type && type.indexOf('text/html') > -1) {
                            html = true;
                        } else if (typeof data === 'string') {
                            data = $.parseJSON(data);
                        }
                        if (typeof success === "function") {
                            success(data, html);
                        }
                    },
                    error: function(xhr) {
                        if (fail) {
                            fail(xhr);
                        } else {
                            self.ajax.fail(xhr);
                        }
                    },
                    complete: function(xhr, status) {
                        if (typeof complete === "function") {
                            complete(xhr, status);
                        }
                    }
                });
            },
            get: function(url, data, callback, fail, complete) {
                var self;
                self = GeneralApp;
                return self.ajax["do"](url, data, self.ajax.method.GET, callback, fail, complete);
            },
            post: function(url, data, callback, fail, complete) {
                var self;
                self = GeneralApp;
                return self.ajax["do"](url, data, self.ajax.method.POST, callback, fail, complete);
            }
        },
        init: function() {
            var self;
            self = this;
            return self;
        }
    };

    window.App = GeneralApp.init();

}).call(this);