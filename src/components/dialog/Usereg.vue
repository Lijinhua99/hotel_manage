<template>
    <div class="liveinPage">
        <table border="0" width="100%" cellpadding="0" cellspacing="0" id="content-table">
            <tr>
                <td id="tbl-border-left"></td>
                <td>
                    <!--  start content-table-inner -->
                    <div id="content-table-inner">
                        <table border="0" width="100%" cellpadding="0" cellspacing="0">

                            <tr>
                                <td height="50" valign="top"><div class="error-left"></div>
                                    <div class="error-inner">
                                        <h3 class="add" align="center">您当前的位置：填写入住信息  </h3>
                                    </div></td>
                            </tr>



                            <tr valign="top">
                                <td>
                                    <!-- start id-form -->
                                    <form  action="<%=request.getContextPath() %>/CustomerAddServlet" method="post">
                                        <table  border="0" cellpadding="0" cellspacing="0"  id="id-form" align="center">
                                            <tr>
                                                <th valign="top">账号姓名：</th>
                                                <td><input type="text" name= "customertypeid" class="inp-form-error large_input"/></td>
                                                <td><div class="error-left"></div>
                                                    <div class="error-inner">必填项* </div></td>
                                            </tr>
                                            <tr>
                                                <th valign="top">房间号：</th>
                                                <td><input  name= "customerid" type="text" class="inp-form"/></td>
                                                <td><div class="error-left"></div>
                                                    <div class="error-inner">必填项*</div></td>
                                            </tr>
                                            <tr>
                                                <th valign="top">入住日期：</th>
                                                <td><input  name= "customername" type="text" class="inp-form"/></td>
                                                <td><div class="error-left"></div>
                                                    <div class="error-inner">必填项*</div></td>
                                            </tr>
                                            <tr>
                                                <th valign="top">预计退房日期：</th>
                                                <td><input  name= "customersex" type="text" class="inp-form"/></td>
                                                <td><div class="error-left"></div>
                                                    <div class="error-inner">必填项*</div></td>
                                            </tr>
                                            <tr>
                                                <th valign="top">总费用：</th>
                                                <td><input  name= "customerhao" type="text" class="inp-form"/></td>
                                                <td><div class="error-left"></div>
                                                    <div class="error-inner">必填项*</div></td>
                                            </tr>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <td valign="top"><input type="submit" value="添加" class="form-submit" />
                                                    <input type="reset" value="删除" class="form-reset"  /></td>
                                                <td></td>
                                            </tr>
                                        </table>
                                    </form>
                                    <!-- end id-form  -->
                                </td>
                            </tr>

                        </table>
                        <div class="clear"></div>
                    </div>
                    <!--  end content-table-inner  -->
                </td>

            </tr>

        </table>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>