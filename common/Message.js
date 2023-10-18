module.exports = {
  account: {
    ERROR_ACCOUNT_VALIDATION: "Thiếu thông tin đăng nhập",
    LOGIN_SUCCESSFULL: "Đăng nhập thành công",
    ERROR_ACCOUNT_LOGIN: "Tên đăng nhập hoặc mật khẩu không đúng",
    ERROR_ACCOUNT_NOT_FIND: "Không tìm thấy tài khoản",
    ERROR_ACCOUNT_UNAUTHORIZATION:
      "Tài khoản không có đủ quyền hạn thực hiện chức năng này",
    ERROR_ACCOUNT_TIME_BAN: "Thời gian khóa tối đa là 576 giờ",
    ERROR_ACCOUNT_BANNED: "Tài khoản này đang bị khóa",
    BAN_SUCCESSFULL: "Khóa tài khoản thành công",
    ERROR_BAN_VALIDATION: "Thiếu dữ liệu hoặc định dạng không đúng",
    ERROR_DATA_VALIDATION: "Thiếu thông tin gửi mã",
    SEND_CODE: "Đã gửi mã xác nhận",
    CODE_TIMED: "Mã đã hết hạn",
    ERROR_CODE: "Mã không đúng",
    CHANGE_PASSWORD_SUCCESSFULL: "Thay đổi mật khẩu thành công",
    NEW_PASSWORD_VALIDATION: "Mật khẩu mới không được bỏ trống",
    OLD_PASSWORD_WRONG: "Mật khẩu cũ không chính xác!",
    OLD_PASSWORD_VALIDATION: "Thiếu mật khẩu cũ!",
    ERROR_ACCOUNT_EXISTED: "Tên đăng nhập đã được sử dụng!",
    ERROR_EMAIL_EXISTED: "Email này đã được sử dụng!",
    REGISTER_SUCCESSFULL: "Tạo mới tài khoản thành công",
    ERROR_REGISTER_VALIDATION: "Thiếu thông tin để tạo tài khoản",
    ERROR_OTHER: "Something wrong",
    GET_SUCCESSFULL: "Lấy thông tin thành công",
    NOT_KEYWORD_SEARCH: "Chưa có từ khóa tìm kiếm",
    UPDATE_SUCCESSFULL: "Cập nhật thành công",
    UPDATE_FAILED: "Cập nhật thất bại",
    VALIDATION_REQUIRED: "Yêu cầu bắt buộc",
    UNLOCK_SUCCESSFULL: "Mở khóa tài khoản thành công",
    LOCK_SUCCESSFULL: "Khóa vĩnh viễn tài khoản thành công",
    ERROR_ACCOUNT_NAME_VALIDATION: "Tên đăng nhập không được quá 50 ký tự",
    ERROR_REAL_NAME_VALIDATION: "Tên hiển thị không được quá 50 ký tự",
    ERROR_EMAIL_VALIDATION: "Email không được quá 50 ký tự",
    ERROR_EMAIL_INVALID_FORMAT: "Email không đúng định dạng",
    ERROR_PASSWORD_MIN: "Mật khẩu tối thiểu 8 ký tự",
    ERROR_PASSWORD_MAX: "Mật khẩu tối đa 32 ký tự",
    ERROR_PASSWORD_FORMAT:
      "Mật khẩu phải có một ký tự hoa, một ký tự thường và một ký tự đặc biệt",
  },
  bookmark: {
    BOOKMARKED: "Bạn đã đánh dấu bài viết này rồi",
    BOOKMARK_SUCCESSFULL: "Đánh dấu bài viết thành công",
    BOOKMARK_NOT_EXISTED: "Bài viết không tồn tại",
    DELETE_BOOKMARK_SUCCESSFULL: "Xóa đánh dấu thành công",
    DELETE_BOOKMARK_FAIL: "Bạn chưa đánh dấu bài viết này",
  },
  comment: {
    ERROR_DATA: "Thiếu dữ liệu",
    COMMENT_SUCCESSFULL: "Bình luận thành công",
    COMMENT_MAIN_NOT_EXISTED: "Không tìm thấy bình luận chính",
    COMMENT_NOT_EXISTED: "Không tìm thấy bình luận chính",
    NOT_MATCH: "Bài đăng và bình luận không khớp",
    NOT_COMMENT_REAL:
      "Không phải chủ bình luận nên không thể thay đổi bình luận",
    DELETE_COMMENT_SUCCESSFULL: "Xóa bình luận thành công",
    STATUS_FAIL: "Trạng thái không hợp lệ",
  },
  feedback: {
    FEEDBACK_NOT_EXISTED: "Phản hồi không tồn tại",
    DELETE_FEEDBACK_SUCCESSFULL: "Xóa phản hồi thành công",
    ADD_FEEDBACK_SUCCESSFULL: "Thêm phản hồi thành công",
    BOOKMARK_FEEDBACK: "Đánh dấu đã đọc phản hồi thành công!",
  },
  follow_account: {
    NOT_FOLLOW: "Không thể tự theo dõi bản thân",
    FOLLOWED: "Bạn đã theo dõi tài khoản này",
    NOT_FOLLOWED: "Bạn chưa theo dõi tài khoản này",
  },
  follow_tag: {
    FOLLOWED: "Bạn đã theo dõi thẻ này rồi",
    NOT_FOLLOWED: "Bạn chưa theo dõi thẻ này",
  },
  image: {
    IMAGE_NOT_EXSITED: "Hình ảnh không tồn tại",
    NOT_READ_FILE: "Không thể đọc file",
    NOT_RECEIVE_FILE: "Không nhận được file",
  },
  notification: {
    NOTIFICATION_NOT_EXISTED: "Thông báo không tồn tại",
  },
  post: {
    POST_NOT_EXISTED: "Bài viết không tồn tại",
    NOT_KEYWORD_SEARCH: "Chưa có từ khóa tìm kiếm",
    ERROR_TAG_NUMBER: "Số lượng thẻ được gắn cho bài viết tối đa là 5",
    NOT_UPDATE: "Không thể sửa bài viết của người khác",
    NOT_DELETE: "Không thể xóa bài viết của người khác",
    STATUS_INVALID: "Trạng thái mới không hợp lệ",
  },
  tag: {
    TAG_NOT_EXISTED: "Thẻ không tồn tại",
    NOT_KEYWORD_SEARCH: "Chưa có từ khóa để tìm kiếm",
    NOT_LOGO: "Không có logo được tải lên",
    TAG_EXISTED: "Tên thẻ đã tồn tại",
    UPLOAD_FAIL: "Lỗi upload logo",
    NOT_NAME_TAG: "Thiếu tên thẻ",
    TAG_VALIDATION: "Tên tag không được bỏ trống",
    DELETE_FAIL: "Thẻ đã có bài viết nên không thể xóa",
    TAG_INVALID: "Thẻ không hợp lệ",
  },
  vote: {
    VOTE_INVALID: "Loại đánh giá không hợp lệ",
    CHANGE_VOTE_SUCCESSFULL: "Thay đổi đánh giá thành công",
    ADD_VOTE_SUCCESSFULL: "Thêm đánh giá thành công",
    NOT_VOTED: "Bạn chưa đánh giá bài viết này",
  },
  common: {
    GET_SUCCESSFULL: "Lấy thông tin thành công",
    UPDATE_SUCCESSFULL: "Cập nhật thông tin thành công",
    ACTION_SUCCESSFULL: "Thao tác thành công",
    ERROR_DATA: "Thiếu dữ liệu",
    ACTION_FAILED: "Thao tác không thành công",
    ERROR_OTHER: "Wrong something!",
    NOT_FOUND: "Không tìm thấy",
  },
};
