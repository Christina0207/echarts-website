window.__EC_DOC_option_dataset = {
  "id": {
    "desc": "<p>Component ID, not specified by default. If specified, it can be used to refer the component in option or API.</p>\n"
  },
  "source": {
    "desc": "<p>Source data. Generally speaking, a source data describe a table, where these format below can be applied:</p>\n<p>2d array, where <a href=\"#dataset.dimensions\">dimension names</a> can be provided in the first row/column, or do not provide, only data.</p>\n<pre><code class=\"lang-js\">[\n    [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n    [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n    [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n    [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n]\n</code></pre>\n<p>Row based key-value format (object array), where the keys indicate <a href=\"#dataset.dimensions\">dimension names</a>.</p>\n<pre><code class=\"lang-js\">[\n    {product: &#39;Matcha Latte&#39;, count: 823, score: 95.8},\n    {product: &#39;Milk Tea&#39;, count: 235, score: 81.4},\n    {product: &#39;Cheese Cocoa&#39;, count: 1042, score: 91.2},\n    {product: &#39;Walnut Brownie&#39;, count: 988, score: 76.9}\n]\n</code></pre>\n<p>Column based key-value format, where each value represents a column of a table.</p>\n<pre><code class=\"lang-js\">{\n    &#39;product&#39;: [&#39;Matcha Latte&#39;, &#39;Milk Tea&#39;, &#39;Cheese Cocoa&#39;, &#39;Walnut Brownie&#39;],\n    &#39;count&#39;: [823, 235, 1042, 988],\n    &#39;score&#39;: [95.8, 81.4, 91.2, 76.9]\n}\n</code></pre>\n<p>More details about <code class=\"codespan\">dataset</code> can be checked in the <a href=\"tutorial.html#dataset\" target=\"_blank\">tutorial</a>.</p>\n"
  },
  "dimensions": {
    "desc": "<p><code class=\"codespan\">dimensions</code> can be used to define dimension info for <code class=\"codespan\">series.data</code> or <code class=\"codespan\">dataset.source</code>.</p>\n<p>Notice: if <a href=\"#dataset\">dataset</a> is used, we can provide dimension names in the first column/row of <a href=\"#dataset.source\">dataset.source</a>, and not need to specify <code class=\"codespan\">dimensions</code> here. But if <code class=\"codespan\">dimensions</code> is specified here, echarts will not retrieve dimension names from the first row/column of <code class=\"codespan\">dataset.source</code> any more.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">option = {\n    dataset: {\n        source: [\n            // &#39;date&#39;, &#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;\n            [12, 44, 55, 66, 2],\n            [23, 6, 16, 23, 1],\n            ...\n        ]\n    },\n    series: {\n        type: &#39;xxx&#39;,\n        // Specify name for each dimesions, which will be displayed in tooltip.\n        dimensions: [&#39;date&#39;, &#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;]\n    }\n}\n</code></pre>\n<pre><code class=\"lang-js\">series: {\n    type: &#39;xxx&#39;,\n    dimensions: [\n        null,                // If you do not intent to defined this dimension, use null is fine.\n        {type: &#39;ordinal&#39;},   // Specify type of this dimension.\n                             // &#39;ordinal&#39; is always used in string.\n                             // If type is not specified, echarts will guess type by data.\n        {name: &#39;good&#39;, type: &#39;number&#39;},\n        &#39;bad&#39;                // Equals to {name: &#39;bad&#39;}.\n    ]\n}\n</code></pre>\n<p>Each data item of <code class=\"codespan\">dimensions</code> can be:</p>\n<ul>\n<li><code class=\"codespan\">string</code>, for example, <code class=\"codespan\">&#39;someName&#39;</code>, which equals to <code class=\"codespan\">{name: &#39;someName&#39;}</code>.</li>\n<li><code class=\"codespan\">Object</code>, where the attributes can be:<ul>\n<li>name: <code class=\"codespan\">string</code>.</li>\n<li>type: <code class=\"codespan\">string</code>, supports:<ul>\n<li><code class=\"codespan\">number</code></li>\n<li><code class=\"codespan\">float</code>, that is, <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array\" target=\"_blank\">Float64Array</a></li>\n<li><code class=\"codespan\">int</code>, that is, <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array\" target=\"_blank\">Int32Array</a></li>\n<li><code class=\"codespan\">ordinal</code>, discrete value, which represents string generally.</li>\n<li><code class=\"codespan\">time</code>, time value, see <a href=\"#series.data\">data</a> to check the format of time value.</li>\n</ul>\n</li>\n<li>displayName: <code class=\"codespan\">string</code>, generally used in tooltip for dimension display. If not specified, use <code class=\"codespan\">name</code> by default.</li>\n</ul>\n</li>\n</ul>\n<p>When <code class=\"codespan\">dimensions</code> is specified, the default <code class=\"codespan\">tooltip</code> will be displayed vertically, which is better to show diemsion names. Otherwise, <code class=\"codespan\">tooltip</code> will displayed only value horizontally.</p>\n"
  },
  "sourceHeader": {
    "desc": "<p>Whether the first row/column of <code class=\"codespan\">dataset.source</code> represents <a href=\"dataset.dimensions\" target=\"_blank\">dimension names</a>. Optional values:</p>\n<ul>\n<li><code class=\"codespan\">null/undefine</code>: means auto detect whether the first row/column is dimension names or data.</li>\n<li><code class=\"codespan\">true</code>: the first row/column is dimension names.</li>\n<li><code class=\"codespan\">false</code>: data start from the first row/column.</li>\n</ul>\n<p>Note: &quot;the first row/column&quot; means that if <a href=\"#series.seriesLayoutBy\">series.seriesLayoutBy</a> is set as <code class=\"codespan\">&#39;column&#39;</code>, pick the first row, otherwise, if it is set as <code class=\"codespan\">&#39;row&#39;</code>, pick the first column.</p>\n"
  }
}