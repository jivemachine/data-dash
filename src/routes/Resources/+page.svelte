<script>
	import PdfViewer from 'svelte-pdf';
</script>

<PdfViewer 
    url="src/routes/Resources/Codeup_Syllabus_-_ursula.pdf"
    scale={1.5}
    showButtons={["navigation", "zoom", "print", "autoflip", "timeInfo", "pageInfo"]}
    showBorder={true}
/>