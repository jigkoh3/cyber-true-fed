<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
 <HEAD>
 <c:set var="context" value="${pageContext.request.contextPath}" />
<script src="${context}/themes/js/jquery.js"></script>
  <%
  String queryKey  = null;
  String urlPrint = "/sales/order/pdf/get-pdf-reprint?order-id=";
 try {
 String headerAgent = request.getHeader("user-agent");
 queryKey = request.getParameter("keyId");
 %>
  <TITLE> Print [ <%=queryKey%>] </TITLE>
<!--   <META NAME="Generator" CONTENT="EditPlus"> -->
<!--   <META NAME="Author" CONTENT=""> -->
<!--   <META NAME="Keywords" CONTENT=""> -->
<!--   <META NAME="Description" CONTENT=""> -->


 </HEAD>
 <BODY > 
 <%
 if (null != queryKey && !"".equalsIgnoreCase(queryKey)) {

	 if (null != headerAgent && headerAgent.indexOf("MSIE") > -1) {
		 %>
		 <object id="pdfDoc" style="position:absolute;z-index:-1;" name="pdfDoc" classid="clsid:CA8A9780-280D-11CF-A24D-444553540000" width="1100px;" height="550px;"><param id="paramsrc" name="SRC" value="<%=queryKey%>"  /></object>
	 <%
	 } else { %>
	 
	    <script type="text/javascript">
      		window.location = '<%=queryKey%>';
       </script>
	 <%
	 }
 } else {
	 %>
	 NOT FOUND
	 <%
 }
 } catch (Exception e){
	 
	 e.printStackTrace();
	 %>
	 NOT
	 <%
 }
 %>
 </BODY>
</HTML>