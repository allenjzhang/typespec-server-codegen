using Todo.Service.Models;

namespace Todo.Service
{
    public class AttachmentsOperations : IAttachmentsOperations
    {
        public Task CreateAttachmentAsync(long itemId, object contents)
        {
            throw new NotImplementedException();
        }

        public Task<TodoPage> ListAsync(long itemId)
        {
            switch (itemId)
            {
                case 0:
                    // no result
                    return Task.FromResult(new TodoPage()
                    {
                        Items = Array.Empty<TodoItem>()
                    });
                case 1:
                    // 1 result, one page
                    return Task.FromResult(new TodoPage()
                    {
                        Items = new TodoItem[]
                        {
                            new TodoItem()
                            {
                                Id = 1,
                                Title = "Item 1",
                            }
                        }
                    });
                case 2:
                    // 2 results, two pages
                    return Task.FromResult(new TodoPage()
                    {
                        Items = new TodoItem[]
                        {
                            new TodoItem()
                            {
                                Id = 1,
                                Title = "Item 1",
                            }
                        },
                        NextLink = "/items/2/attachments?offset=1"
                    });
                default:
                    throw new NotImplementedException();
            }
        }
    }
}
