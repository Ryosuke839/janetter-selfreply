// Self-reply plugin for Janetter
// by Ryosuke839 (@Ryosuke839)
// Put this file to %ProgramFiles%\Janetter2\Theme\Common\js\plugins\ and restart Jantter to install
// (Replace %ProgramFiles% with %ProgramFiles(x86)% for 64-bit windows)

(function($, jn)
{
	if(!jn.pluginInfo)
		jn.pluginInfo = {};
	jn.pluginInfo['jp-ddo-hotmist-selfreply'] =
	{
		'name' :
		{
			'ja' : '自己リプライプラグイン',
			'en' : 'Self-reply plugin'
		},
		'author' :
		{
			'en' : '@Ryosuke839'
		},
		"version" : '1.0',
		'file' : 'selfreply.js',
		'language' : ['de', 'en', 'es', 'ja', 'ko', 'pt', 'ru', 'zh-CN'],
		"last_update" : "2017/09/26",
		'update_timezone' : '9',
		'jnVersion' : '4.4.0.0',
		'description' : {
			'ja' : '自分自身にリプライする際， @screen_name を消しても reply_to が消えないようにします．',
		}
	};
	if (jn.tweeteditor)
	{
		var func_orig = jn.tweeteditor.prototype.removeReplyTo;
		jn.tweeteditor.prototype.removeReplyTo = function()
		{
			var textarea = $('#tweet-edit-container > .expanded textarea');
			if (this._tweetCountTimer && this._replayId > 0 && textarea.val().indexOf('@' + this._replayTo) == -1 && this._replayTo.toLowerCase() == this._account.screen_name.toLowerCase())
				return;
			return func_orig.apply(this, arguments);
		};
	}
	
})(jQuery, janet);
